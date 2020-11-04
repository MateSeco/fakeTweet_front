import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
          <form
            className="login100-form validate-form center"
            action="/register"
            method="POST"
            data-parsley-validate=""
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
              <button className="login100-form-btn rounded-pill">
                Registrarse
              </button>
            </div>

            <div className="text-center w-full p-t-20">
              <span className="txt1"> ¿Login? </span>

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
