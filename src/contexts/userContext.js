import React, { Component } from "react";
import authService from "../services/authService";

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    user: {},
  };

  loginUser = (user) => {
    authService.login(user);
    user.isAuthenticated = true;
    this.setState(user);
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

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          login: this.loginUser,
          currentUser: this.currentUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
