import React from "react";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-welcome100 p-l-50 p-r-50 p-t-77 p-b-30">
          <form
            className="login100-form validate-form"
            action="/login"
            method="POST"
          >
            <span className="welcome100-form-title">
              Bienvenido a
              <p className="twitter">
                <span className="fakeTwitter-welcome">fake</span> Twitter
              </p>
            </span>
            <span className="welcome100-form-title pt-5 pb-3">
              Únete hoy mismo.
            </span>

            <div className="container-login100-form-btn p-t-25">
              <button type="button" className="login100-form-btn rounded-pill">
                <Link to={"register"} className="welcomeLinkStyle">
                  Regístrate
                </Link>
              </button>
            </div>

            <div className="container-login100-form-btn p-t-25">
              <button
                type="button"
                className="login100-form-btn rounded-pill mb-5"
              >
                <Link to={"/login"} className="welcomeLinkStyle">
                  Iniciar sesión
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
