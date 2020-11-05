import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const moment = require("moment");
const axios = require("axios");

function Tweet({ tweet, author }) {
  const token = useSelector((state) => state.token);
  const dateFormated = moment(tweet.date).format("DD/MM/YYYY - HH:mm:ss");
  const [likes, setLikes] = useState(tweet.likes.length);

  function likeTweet(tweetId) {
    axios
      .get(`${process.env.REACT_APP_URL}/like/${tweetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setLikes(res.data.likes))
      .catch((err) => console.log("err", err));
  }

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
            <span className="text-muted">@{author.userName}</span>
          </h5>

          <p className="tweetFont"> {tweet.content}</p>
          <div className="tweetInfo">
            <span> {dateFormated}</span>
            <span>
              <button type="button" onClick={() => likeTweet(tweet._id)}>
                <i className="far fa-heart heart"></i>
              </button>
              {likes}
            </span>

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
