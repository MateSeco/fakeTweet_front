import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";

function Profile() {
  const state = useSelector((state) => state);
  const token = state.token;
  const params = useParams();
  const [resData, setResData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.user.image);
        setResData({
          ...resData,

          user: res.data.user,
        });
      })
      .then(() => console.log(resData.user.image))
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
                  src={`${process.env.REACT_APP_URL}${resData.user.image}`}
                  alt=""
                />
              </div>
              <h3 className="card-title"> user.fullName</h3>
              <h5 className="card-subtitle mb-2 text-muted">@user.userName</h5>
              <p className="card-text tweetFont "> user.description </p>
              <div className="follows">
                <span>
                  <Link to={`/${params.username}/followers`} className="links">
                    followers
                  </Link>
                </span>
                <span className="following">
                  <Link to={`/${params.username}/following`} className="links">
                    following
                  </Link>
                </span>
                <Link to={`/:${params.username}/follow`}>
                  <button className="tweetButton rounded-pill btn btn-primary mr-5">
                    follow
                    {/* <% if(alreadyFollowing === true ){ %>
                  Unfollow<%}else{%>Follow<%}%> */}
                  </button>
                </Link>
              </div>
            </div>
          </header>
          {resData.user &&
            resData.user.tweets.map((tweet) => {
              return <Tweet tweet={tweet} author={resData.user} />;
            })}
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
