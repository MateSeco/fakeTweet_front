import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ tweetReducer, userReducer });

export default rootReducer;
