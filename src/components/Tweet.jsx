import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { reqGet } from "../utils/reqCalls";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
const moment = require("moment");

function Tweet({ tweet, author }) {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);

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
            {user.userId === author._id && (
              <span>
                <DeleteButton tweet={tweet} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
