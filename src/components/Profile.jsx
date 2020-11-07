import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import { reqGet } from "../utils/reqCalls";
import actions from "../redux/Actions/tweetActions";
import CreateTweet from "./CreateTweet";

function Profile() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);
  const state = useSelector((state) => state);
  const token = state.userReducer.token;
  const params = useParams();
  /*   const [resData, setResData] = useState({}); */

  useEffect(() => {
    /* reqGet(`/${params.username}`, token) */
    axios
      .get(`${process.env.REACT_APP_URL}/users/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("LLAMADA DE PROFILE", res.data);
        dispatch(actions.saveTweets(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavComponent />
      <div className="container">
        {tweets[0].author.firstName && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <header>
              <div className="card-body">
                <div>
                  <img
                    className="profileImage rounded-circle media"
                    src={`${process.env.REACT_APP_URL}${tweets[0].author.image}`}
                    alt=""
                  />
                </div>
                <h3 className="card-title">
                  {" "}
                  {tweets[0].author.firstName} {tweets[0].author.lastName}
                </h3>
                <h5 className="card-subtitle mb-2 text-muted">
                  @{tweets[0].author.userName}
                </h5>
                <p className="card-text tweetFont ">
                  {tweets[0].author.description}
                </p>
                <div className="follows">
                  <span>
                    <Link
                      to={`/${params.username}/followers`}
                      className="links"
                    >
                      {tweets[0].author.followers.length} Followers
                    </Link>
                  </span>
                  <span className="ml-4">
                    <Link
                      to={`/${params.username}/following`}
                      className="links"
                    >
                      {tweets[0].author.following.length} Following
                    </Link>
                  </span>
                  <Link to={`/:${params.username}/follow`}>
                    <button className="tweetButton rounded-pill btn btn-primary ">
                      follow
                    </button>
                  </Link>
                </div>

                <CreateTweet />
              </div>
            </header>

            {tweets.map((tweet) => {
              return <Tweet tweet={tweet} author={tweet.author} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
