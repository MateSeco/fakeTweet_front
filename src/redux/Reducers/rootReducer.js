import { combineReducers } from "redux";
import tweets from "./tweetReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ tweets, userReducer });

export default rootReducer;
