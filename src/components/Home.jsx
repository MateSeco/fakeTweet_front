import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";

function Home() {
  const token = useSelector((state) => state.token);
  const [resData, setResData] = useState({ tweets: [] });
  const [content, setContent] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/home`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>
        setResData({
          ...resData,

          tweets: res.data.tweets,
        })
      )
      .catch((err) => console.log("err", err));
  }, []);

  function sendTweet(e) {
    e.preventDefault();

    const tweet = { content: content };
    axios
      .post(`${process.env.REACT_APP_URL}/home`, tweet, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setResData((rs) => {
          return { tweets: [res.data, ...rs.tweets] };
        });
        console.log(res);
      });
  }

  /* console.log(resData.tweets); */

  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <form className="redactTweet pt-3" onSubmit={(e) => sendTweet(e)}>
            <div className="form-group">
              <label for="content"></label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                placeholder="Whats happening?"
                required=""
                data-parsley-require-message="Por favor ingrese un texto"
                maxLength="140"
                data-parsley-maxLength-message="Su tweet excede los 140 caracteres"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-pill tweetButton"
            >
              Tweet
            </button>
          </form>
          {resData.tweets.map((tweet) => {
            return (
              <Tweet key={tweet._id} tweet={tweet} author={tweet.author} />
            );
          })}
        </div>
      </div>
      {/*      <footer><%- include('./partials/scripts.ejs'); %></footer> */}
    </div>
  );
}
export default Home;
