import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";
import { UserContext } from "../contexts/userContext";

class Navbar extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.currentUser();
  }

  currentUser = async () => {
    try {
      await this.context.currentUser();
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  render() {
    // const { user } = this.state;
    // const value = React.useContext(UserContext);
    const { user, isAuthenticated } = this.context.state;
    return (
      <>
        {/* <UserContext.Consumer> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/">
              Home
            </NavLink>
            {isAuthenticated && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/">
                  {user?.name}
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
            {!isAuthenticated && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <a className="nav-item nav-link" onClick={this.current}>
                  Current
                </a>
              </React.Fragment>
            )}
          </div>
        </nav>
        {/* </UserContext.Consumer> */}
      </>
    );
  }
}

export default Navbar;
