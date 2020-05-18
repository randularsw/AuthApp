import React, { Component } from "react";
import authService from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    authService.logout();
    this.props.history.push("/");
  }
  render() {
    return null;
  }
}

export default Logout;
