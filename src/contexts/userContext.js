import React, { Component } from "react";
import authService from "../services/authService";
import userService from "../services/userService";

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  loginUser = async (data) => {
    try {
      const user = await authService.login(data);
      if (user._id) {
        const isAuthenticated = true;
        this.setState({ isAuthenticated, user });
      }
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  currentUser = async () => {
    try {
      const { data: user } = await authService.getCurrentUser();
      const isAuthenticated = true;
      this.setState({ isAuthenticated, user });
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  logoutUser = () => {
    authService.logout();
    const isAuthenticated = false;
    const user = null;
    this.setState({ isAuthenticated, user });
  };

  registerUser = async (data) => {
    const user = await userService.addUser(data);
    if (user._id) {
      const isAuthenticated = true;
      this.setState({ isAuthenticated, user });
    }
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          login: this.loginUser,
          logout: this.logoutUser,
          register: this.registerUser,
          currentUser: this.currentUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
