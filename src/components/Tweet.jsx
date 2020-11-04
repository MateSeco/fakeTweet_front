import React from "react";
import { Link } from "react-router-dom";

function Tweet() {
  return (
    <div className="container">
      <div className="media mt-4 mb-4">
        <img
          src="user.image"
          className="mr-3 rounded-circle profileImageTweet"
          alt="..."
        />
        <div className="media-body tweetContainer">
          <h5 className="mt-0">
            <span>
              <Link to={"/user.userName"} className="links">
                user.fullName
              </Link>
            </span>
            <span className="text-muted">@user.userName</span>
          </h5>

          <p className="tweetFont"> tweets.content</p>
          <div className="tweetInfo">
            <span> moment(tweets.date).format("DD/MM/YYYY - HH:mm:ss") </span>
            <span>
              <Link to={"/like/tweets._id"}>
                <i className="far fa-heart heart"></i>
              </Link>
              tweets.likes.length{" "}
            </span>
            {/* if (ownTweet) {  */}
            <span>
              <Link to={"/user.userName/delete/tweets._id"} className="delete">
                <i className="far fa-trash-alt ml-2"></i>
              </Link>
            </span>

            {/*   <% } %> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
