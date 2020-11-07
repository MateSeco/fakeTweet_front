import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import actions from "../redux/Actions/tweetActions";
import CreateTweet from "./CreateTweet";

function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    /* reqGet("/home", token)
      .then((res) => setResData({ ...resData, tweets: res.data.tweets }))
      .catch((err) => console.log("err", err)); */
    axios
      .get(`${process.env.REACT_APP_URL}/tweets`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => dispatch(actions.saveTweets(res.data.tweets)))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="homeBody">
      <NavComponent />
     {!tweets.firstName && <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <CreateTweet />
          
            {tweets.map((tweet) => {
              return (
                <Tweet key={tweet._id} tweet={tweet} author={tweet.author} />
              );
            })}
        </div>
      </div>}
    </div>
  );
}
export default Home;
