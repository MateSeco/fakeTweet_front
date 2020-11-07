import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { reqGet } from "../utils/reqCalls";
import LikeButton from "./LikeButton";
const moment = require("moment");
const axios = require("axios");

function Tweet({ tweet, author }) {
  const token = useSelector((state) => state.userReducer.token);
  const dateFormated = moment(tweet.date).format("DD/MM/YYYY - HH:mm:ss");

  return (
    <div className="container">
      <div className="media mt-4 mb-4">
        <img
          src={author.image}
          className="mr-3 rounded-circle profileImageTweet"
          alt="..."
        />
        <div className="media-body tweetContainer">
          <h5 className="mt-0">
            <span>
              <Link to={`/${author.userName}`} className="links">
                {author.firstName} {author.lastName}
              </Link>
            </span>
            <span className="text-muted ml-1">@{author.userName}</span>
          </h5>

          <p className="tweetFont"> {tweet.content}</p>
          <div className="tweetInfo">
            <span> {dateFormated}</span>
            <LikeButton tweet={tweet} />
            <span>
              <Link to={"/user.userName/delete/tweets._id"} className="delete">
                <i className="far fa-trash-alt ml-2"></i>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
