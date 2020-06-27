import React, { Component } from "react";
import authService from "../services/authService";
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
