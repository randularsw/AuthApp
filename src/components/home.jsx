import React, { Component } from "react";
import { getTimes, addTime, deleteAll } from "../services/timeService";

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

  async onDelete() {
    const { data: times } = await deleteAll();
    console.log(times);
  }

  render() {
    console.log("Render Home");
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
              <li key={t._id}>{t.data}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
