import React, { Component } from "react";
import { UserContext } from "../contexts/userContext";

class Logout extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.logout();
    this.props.history.push("/");
  }
  render() {
    return null;
  }
}

export default Logout;
