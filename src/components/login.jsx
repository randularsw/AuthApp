import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../services/authService";

const Login = (props) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await authService.login(data);
      // console.log(user);
      // window.location = "/";
      props.history.push("/");
      // reset({ email: "" });
      // reset({ password: "" });
    } catch (ex) {
      console.log("exception", ex);
    }
  };

  return (
    <div className="my-5 mx-auto" style={{ width: "50%" }}>
      <h4>Login</h4>
      <Link to="/register">Register</Link> instead
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            className="form-control"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email?.type === "required" && (
            <small className="text-danger">
              <p>Email Required</p>
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            ref={register({
              required: true,
              minLength: 6,
            })}
          />
          {errors.password?.type === "required" && (
            <small className="text-danger">
              <p>Password Required</p>
            </small>
          )}
          {errors.password?.type === "minLength" && (
            <small className="text-danger">
              <p>Minimun 6 charactors required</p>
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
