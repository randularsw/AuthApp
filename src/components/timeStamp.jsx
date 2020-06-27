import React, { Component } from "react";
import { getTime } from "../services/timeService";

class TimeStamp extends Component {
  state = {
    time: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: time } = await getTime(id);
    this.setState({ time });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h4 className="d-flex justify-content-center mt-5">
          Protected TimeStamp
        </h4>
        <p className="d-flex justify-content-center">ID: {time?._id}</p>
        <p className="d-flex justify-content-center">TIme: {time?.data}</p>
      </div>
    );
  }
}

export default TimeStamp;
