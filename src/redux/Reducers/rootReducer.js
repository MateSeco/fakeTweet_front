import { combineReducers } from "redux";
import tweets from "./tweetReducer";
import userReducer from "./userReducer";
import profile from "./profileReducer";

const rootReducer = combineReducers({ profile, tweets, userReducer });

export default rootReducer;
