import React, { Component } from "react";
import authService from "../services/authService";

export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    user: null,
  };

  loginUser = async (data) => {
    const user = await authService.login(data);
    const isAuthenticated = true;
    this.setState({ isAuthenticated, user });
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

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          login: this.loginUser,
          logout: this.logoutUser,
          currentUser: this.currentUser,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
