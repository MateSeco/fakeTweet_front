import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/userActions";

function Login() {
  const dispatch = useDispatch();

  function axiosLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const user = { email: email, password: password };
    console.log(user);
    axios.post(process.env.URL + "/login", user).then((res) => {
      console.log(res);
      dispatch(actions.logged(res.data));
    });
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
          <form
            className="login100-form validate-form"
            data-parsley-validate=""
          >
            <span className="login100-form-title p-b-55"> Login </span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="email"
                id="email"
                placeholder="Ingrese su email o usuario"
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
                id="password"
                placeholder="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <div className="container-login100-form-btn p-t-25">
              <button
                type="button"
                onClick={() => axiosLogin()}
                className="login100-form-btn rounded-pill"
              >
                Inicia sesion
              </button>
            </div>

            <div className="text-center w-full p-t-115">
              <span className="txt1"> ¿No estas registrado? </span>

              <Link to={"/register"} className="txt1 bo1 hov1">
                Registrate ahora{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
