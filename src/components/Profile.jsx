import React, { useEffect } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  let { username } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/${username}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <header>
            <div className="card-body">
              <div>
                <img
                  className="profileImage rounded-circle media img-thumbnail"
                  src="<%- user.image %>"
                  alt=""
                />
              </div>
              <h3 className="card-title"> user.fullName</h3>
              <h5 className="card-subtitle mb-2 text-muted">@user.userName</h5>
              <p className="card-text tweetFont "> user.description </p>
              <div className="follows">
                <span>
                  <Link to={"/user.userName"} className="links">
                    user.followers.length followers
                  </Link>
                </span>
                <span className="following">
                  <Link to={"/user.userName/following"} className="links">
                    user.following.length following
                  </Link>
                </span>
                <Link to={"/user.userName/follow"}>
                  <button className="tweetButton rounded-pill btn btn-primary mr-5">
                    follow
                    {/* <% if(alreadyFollowing === true ){ %>
                  Unfollow<%}else{%>Follow<%}%> */}
                  </button>
                </Link>
              </div>
            </div>
          </header>

          {/*    <% for (let i = 0; i < user.tweets.length ; i++) { %>
        <hr />
        <%- include('./partials/tweet.ejs', {user, tweets: user.tweets[i]},
        ownTweet) %> <% } %> */}
        </div>
      </div>
    </div>
  );
}

export default Profile;