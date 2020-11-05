import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import { reqGet } from "../utils/reqCalls";

function Profile() {
  const state = useSelector((state) => state);
  const token = state.token;
  const params = useParams();
  const [resData, setResData] = useState({});

  useEffect(() => {
    reqGet(`/${params.username}`, token)
    /* axios
      .get(`${process.env.REACT_APP_URL}/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      }) */
      .then((res) => {
        console.log(res.data.user);
        setResData({
          ...resData,
          user: res.data.user,
        });
      })
      .then(() => console.log(resData.user.image))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <NavComponent />
      <div className="container">
        {resData.user && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <header>
              <div className="card-body">
                <div>
                  <img
                    className="profileImage rounded-circle media"
                    src={`${process.env.REACT_APP_URL}${resData.user.image}`}
                    alt=""
                  />
                </div>
                <h3 className="card-title">
                  {" "}
                  {resData.user.firstName} {resData.user.lastName}
                </h3>
                <h5 className="card-subtitle mb-2 text-muted">
                  @{resData.user.userName}
                </h5>
                <p className="card-text tweetFont ">
                  {resData.user.description}
                </p>
                <div className="follows">
                  <span>
                    <Link
                      to={`/${params.username}/followers`}
                      className="links"
                    >
                      Followers
                    </Link>
                  </span>
                  <span className="ml-4">
                    <Link
                      to={`/${params.username}/following`}
                      className="links"
                    >
                      {resData.user.following.length} Following
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
            {resData.user.tweets.map((tweet) => {
              return <Tweet tweet={tweet} author={resData.user} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
