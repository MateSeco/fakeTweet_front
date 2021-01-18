import React, { useEffect } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import tweetActions from "../redux/Actions/tweetActions";
import profileActions from "../redux/Actions/profileActions";
import CreateTweet from "./CreateTweet";
import FollowButton from "./FollowButton";

export default function Suggestion({ suggestion }) {
  const user = useSelector((state) => state.user);

  return (
    <>
      {suggestion.firstName && (
        <div className="suggestion-div py-2">
          <Link to={`/${suggestion.userName}`} className="links">
            <div>
              <img
                className="rounded-circle profileImageTweet"
                src={`${process.env.REACT_APP_URL_S3}${suggestion.image}`}
                alt=""
              />
            </div>
            <h5 className="card-title">
              {" "}
              {suggestion.firstName} {suggestion.lastName}
            </h5>
          </Link>
          <h5 className="card-subtitle mb-2 text-muted cutUser">
            @{suggestion.userName}
          </h5>
        </div>
      )}
    </>
  );
}
