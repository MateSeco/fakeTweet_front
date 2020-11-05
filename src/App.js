import "./css/main.css";
import "./css/parsley.css";
import "./css/style.css";
import "./css/util.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Welcome from "../src/components/Welcome";
import Login from "../src/components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Following from "./components/Following";
import Followers from "./components/Followers";
import Description from "./components/Description";
import Tweet from "./components/Tweet";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/:username/following" component={Following} />
          <PrivateRoute path="/:username/followers" component={Followers} />
          <Route path="/:username" component={Profile} />
          <PrivateRoute path="/description" component={Description} />
          <Route path="/tweet" component={Tweet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
