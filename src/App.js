import "./css/main.css";
import "./css/parsley.css";
import "./css/style.css";
import "./css/util.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../src/components/Welcome";
import Login from "../src/components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Following from "./components/Following";
import Followers from "./components/Followers";
import Settings from "./components/Settings";
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
          <PrivateRoute path="/:username/settings" component={Settings} />
          <Route path="/tweet" component={Tweet} />
          <Route path="/:username" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
