import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
const moment = require("moment");

function Tweet({ tweet, author }) {
  const user = useSelector((state) => state.user);

  const dateFormated = moment(tweet.date).format("DD/MM/YYYY - HH:mm:ss");

  return (
    <>
      {author && (
        <div className="media px-3 py-4 tweet-container">
          <img
            src={`${process.env.REACT_APP_URL_S3}${author.image}`}
            className="mr-3 rounded-circle profileImageTweet"
            alt="..."
          />
          <div className="media-body tweetContainer ">
            <h5 className="mt-0 ">
              <span>
                <Link to={`/${author.userName}`} className="links">
                  {author.firstName} {author.lastName}
                </Link>
              </span>
              <span className="text-muted ml-1 usernameResponsiveLarge">
                @{author.userName}
              </span>{" "}
            </h5>
            <span className="text-muted usernameResponsiveSmall">
              @{author.userName}
            </span>
            <p className="tweetFont"> {tweet.content}</p>

            <div className="tweetInfo mr-3">
              <small> {dateFormated}</small>
              <div className="tweetInteraction">
                {user.userId === author._id && (
                  <span className="ml-3">
                    <DeleteButton tweet={tweet} />
                  </span>
                )}
                <span><LikeButton tweet={tweet} /></span> </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tweet;
