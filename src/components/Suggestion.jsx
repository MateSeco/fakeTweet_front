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

export default function Suggestion ({suggestion}) {
  const user = useSelector((state) => state.user);

    return(
        <div className="container">
        {suggestion.firstName && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <header>
              <div className="card-body">
                <div>
                  <img
                    className="profileImage rounded-circle media"
                    src={`${process.env.REACT_APP_URL_S3}${suggestion.image}`}
                    alt=""
                  />
                </div>
                <h3 className="card-title">
                  {" "}
                  {suggestion.firstName} {suggestion.lastName}
                </h3>
                <h5 className="card-subtitle mb-2 text-muted">
                  @{suggestion.userName}
                </h5>
                <p className="card-text tweetFont ">{suggestion.description}</p>
                <div className="follows">
                  
                  {user.userId && suggestion._id !== user.userId && (
                    <FollowButton params={suggestion} />
                  )}
                </div>

              </div>
            </header>

          </div>
        )}
      </div>

    )
}