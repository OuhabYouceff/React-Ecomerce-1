import React from "react";

function Login() {
  return (
    <div className="container1">
      <form className="login-form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>
        <div className="butons d-flex justify-content-center mb-5 pb-5">
        <button type="submit" className="btn btn-outline-dark">
          Login
        </button></div>
      </form>
    </div>
  );
}

export default Login;
