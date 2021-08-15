import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/Actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function axiosRegister(e) {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    };
    axios.post(`${process.env.REACT_APP_URL}/users`, user).then((res) => {
      dispatch(actions.logged(res.data));
      history.push(`/${userName}/settings`);
    });
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
          <form
            className="login100-form validate-form center"

            onSubmit={(e) => axiosRegister(e)}
          >
            <span className="login100-form-title p-b-55"> SIGN UP </span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Password is required"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                id="firstName"
                aria-describedby="helpId"
                placeholder="First name"
                required=""

              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Last name is required"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                aria-describedby="helpId"
                placeholder="Last name"
                required=""

              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="username is required"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                id="userName"
                aria-describedby="helpId"
                placeholder="Choose your username"
                maxLength="14"
                required=""
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="helpId"
                placeholder="Email"
                required=""
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-envelope"></span>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Password is required"
            >
              <input
                className="input100 rounded-pill"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                aria-describedby="helpId"
                placeholder="Chhose your password"
                required=""
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <span className="lnr lnr-lock"></span>
            </span>

            <div className="container-login100-form-btn p-t-25">
              <button type="submit" className="login100-form-btn rounded-pill">
                Sign up
              </button>
            </div>

            <div className="text-center w-full p-t-20">
              <span className="txt1"> Already have an account? </span>

              <Link to={"/login"} className="txt1 bo1 hov1">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
