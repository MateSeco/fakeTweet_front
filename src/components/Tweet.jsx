import React from "react";
import { Link } from "react-router-dom";
const moment= require("moment")

function Tweet({tweet, ownTweet}) {
  const dateFormated = moment(tweet.date).format("DD/MM/YYYY - HH:mm:ss");
  return (
    <div className="container">
      <div className="media mt-4 mb-4">
        <img
          src={tweet.author.image}
          className="mr-3 rounded-circle profileImageTweet"
          alt="..."
        />
        <div className="media-body tweetContainer">
          <h5 className="mt-0">
            <span>
              <Link to={"/user.userName"} className="links">
              {tweet.author.firstName} {tweet.author.lastName}
              </Link>
            </span>
            <span className="text-muted">@{tweet.author.userName}</span>
          </h5>

          <p className="tweetFont"> {tweet.content}</p>
          <div className="tweetInfo">
            <span> {dateFormated}</span>
            <span>
              <Link to={"/like/tweets._id"}>
                <i className="far fa-heart heart"></i>
              </Link>
              {tweet.likes.length}{" "}
            </span>
            {(ownTweet) && 
            <span>
              <Link to={"/user.userName/delete/tweets._id"} className="delete">
                <i className="far fa-trash-alt ml-2"></i>
              </Link>
            </span>
           } 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
