import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUser } from "../services/userService";

const Register = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    const { data: user } = await addUser(data);
    console.log(user);
    reset({ email: "" });
    reset({ name: "" });
    reset({ password: "" });
  };

  return (
    <div className="my-5 mx-auto" style={{ width: "50%" }}>
      <h4>Register</h4>
      <Link to="/login">Login</Link> instead
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name?.type === "required" && (
            <small className="text-danger">
              <p>Name Required</p>
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

export default Register;
