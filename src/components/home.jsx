import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTimes, addTime } from "../services/timeService";

class Home extends Component {
  state = {};

  async componentDidMount() {
    const times = await getTimes();
    console.log(times);
  }

  async onSave() {
    const time = await addTime(Date.now());
    console.log(time);
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <h4 className="mt-4">
          TimeStamps{" "}
          <Link to={this.onSave}>
            <i className="far fa-clock"></i>
          </Link>
        </h4>
      </div>
    );
  }
}

export default Home;
