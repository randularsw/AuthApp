import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTimes, addTime } from "../services/timeService";

class Home extends Component {
  state = {
    times: [],
  };

  async componentDidMount() {
    const { data: times } = await getTimes();
    this.setState({ times });
  }

  async onSave() {
    const { data: time } = await addTime({ data: Date.now() });
    console.log(time);
  }

  // async onDelete() {
  //   const { data: times } = await deleteAll();
  //   console.log(times);
  // }

  render() {
    const { times } = this.state;
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h4 className="m-4">
            TimeStamps{" "}
            <Link to={this.onSave}>
              <i className="far fa-clock"></i>
            </Link>
          </h4>
        </div>
        <div className="d-flex justify-content-center">
          <ul>
            {times.map((t) => (
              <li key={t._id}>{t.data}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
