import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/Actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
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
    axios.post("http://localhost:8000/users", user).then((res) => {
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
            data-parsley-validate=""
            onSubmit={(e) => axiosRegister(e)}
          >
            <span className="login100-form-title p-b-55"> Registro </span>

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
                placeholder="Ingrese un nombre..."
                required=""
                data-parsley-required-message="Por favor ingrese un nombre"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <span className="lnr lnr-lock"></span>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="apellido is required"
            >
              <input
                className="input100 rounded-pill"
                type="text"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                aria-describedby="helpId"
                placeholder="Ingrese un apellido..."
                required=""
                data-parsley-required-message="Por favor ingrese una apellido"
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
                placeholder="Ingrese un username..."
                required=""
                data-parsley-required-message="Por favor ingrese una username"
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
                placeholder="Ingrese un email..."
                required=""
                data-parsley-required-message="Por favor ingrese el email del autor"
                data-parsley-pattern="^[a-zA-Z0-9_.]+[@][a-zA-Z_]+\.[a-zA-Z_]+\.?[a-zA-Z_]+\.?[a-zA-Z_]+\.?"
                data-parsley-pattern-message="Por favor, ingrese un email de autor valido"
                aria-describedby="helpId"
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
                placeholder="Ingrese un password..."
                required=""
                data-parsley-required-message="Por favor ingrese una password"
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
                Registrarse
              </button>
            </div>

            <div className="text-center w-full p-t-20">
              <span className="txt1"> ¿Ya tienes una cuenta? </span>

              <Link to={"/login"} className="txt1 bo1 hov1">
                Inicia sesion
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
