import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Logout from "./components/logout";
import TimeStamp from "./components/timeStamp";
import UserProvider from "./contexts/userContext";

function App() {
  console.log("app");
  return (
    <UserProvider>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/times/:id" component={TimeStamp}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </main>
    </UserProvider>
  );
}

export default App;
