import { combineReducers } from "redux";
import tweets from "./tweetReducer";
import user from "./userReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({ profile, tweets, user });

export default rootReducer;
