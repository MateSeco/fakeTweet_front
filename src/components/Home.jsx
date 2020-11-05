import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";

function Home() {
  const token = useSelector((state) => state.token);
  const [resData, setResData] = useState({ ownTweet: "", tweets: [] });

  useEffect(() => {
  axios
      .get(`${process.env.REACT_APP_URL}/home`, {headers: {'Authorization':`Bearer ${token}`}},)
      .then((res) => setResData({ ownTweet:res.data.ownTweet, tweets:res.data.tweets}))
      .catch((err) => console.log("err",err));
  }, []);

  function sendTweet() {
      let content = document.getElementById("content").value;
      const tweet = { content: content};
      axios
      .post(`${process.env.REACT_APP_URL}/home`, tweet, {headers: {'Authorization':`Bearer ${token}`}},).then((res) => {
        console.log(res)
      });
  }

  console.log(resData.tweets)

  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <form className="redactTweet pt-3">
            <div className="form-group">
              <label for="content"></label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                name="content"
                placeholder="Whats happening?"
                required=""
                data-parsley-require-message="Por favor ingrese un texto"
                maxLength="140"
                data-parsley-maxLength-message="Su tweet excede los 140 caracteres"
              ></textarea>
            </div>
            <button
              type="button"
              className="btn btn-primary rounded-pill tweetButton"
              onClick={() => sendTweet()}
            >
              Tweet
            </button>
          </form>
          { resData.tweets.map(tweet => {
          return (<Tweet key={tweet._id} tweet={tweet} user={tweet.author} ownTweet={setResData.ownTweet} />)
        })
        }
        </div>
      </div>
      {/*      <footer><%- include('./partials/scripts.ejs'); %></footer> */}
    </div>
  );
}
export default Home;
