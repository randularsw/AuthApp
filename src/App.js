import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  console.log("app");
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
