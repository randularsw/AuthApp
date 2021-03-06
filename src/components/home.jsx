import React, { Component } from "react";
import { getTimes, addTime, deleteAll } from "../services/timeService";
import { Link } from "react-router-dom";
import authService from "../services/authService";

class Home extends Component {
  state = {
    times: [],
  };

  // constructor(props) {
  //   super(props);
  // }

  async getTimesData() {
    try {
      const { data: times } = await getTimes();
      this.setState({ times });
    } catch (ex) {
      console.log("exception", ex);
      // if(ex.response)
    }
  }

  componentDidMount() {
    this.getTimesData();
  }

  onSave = async () => {
    try {
      const { data: time } = await addTime({ data: Date.now() });
      console.log(time);
      this.getTimesData();
    } catch (ex) {
      console.log("exception", ex);
      // if(ex.response)
    }
  };

  onDelete = async () => {
    try {
      const { data: times } = await deleteAll();
      console.log(times);
      this.getTimesData();
    } catch (ex) {
      console.log("exception", ex);
      // if(ex.response)
    }
  };

  current = async () => {
    try {
      const { data: user } = await authService.getCurrentUser();
      console.log(user);
    } catch (ex) {
      console.log("exception", ex);
      // if(ex.response)
    }
  };

  render() {
    // console.log("Render Home");
    const { times } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h4 className="m-4">
            TimeStamps{" "}
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={this.onSave}
            >
              <i className="far fa-clock"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onDelete}
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </h4>
        </div>
        <div className="d-flex justify-content-center">
          <ul>
            {times.map((t) => (
              <li key={t._id}>
                <Link to={"/times/" + t._id}>{t.data}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
