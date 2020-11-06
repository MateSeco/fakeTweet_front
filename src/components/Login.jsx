import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/Actions/userActions";
import { reqPost } from "../utils/reqCalls";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("nacho");
  const [password, setPassword] = useState("nacho");
  
  async function axiosLogin(e) {
    e.preventDefault();

    const user = { email: email, password: password };

    /* const res = await reqPost("/login", user, null); */
    axios.post(`${process.env.REACT_APP_URL}/login`, user).then((res) => {
    dispatch(actions.logged(res.data));
    history.push("/home");
    });
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
          <form
            className="login100-form validate-form"
            data-parsley-validate=""
            onSubmit={(e) => axiosLogin(e)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
              <button type="submit" className="login100-form-btn rounded-pill">
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
