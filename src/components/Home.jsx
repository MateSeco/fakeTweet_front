import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { useSelector } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet"

function Home() {
  const token = useSelector((state) => state.token);
  const[resData, setResData] = useState({ownTweet:"", tweets:[]})

  useEffect(() => {
  axios
      .get(`http://localhost:8000/home`, {headers: {'Authorization':`Bearer ${token}`}},)
      .then((res) => setResData({ ownTweet:res.data.ownTweet, tweets:res.data.tweets}))
      .catch((err) => console.log("err",err));
  }, []);
  
  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <form className="redactTweet pt-3" method="POST" action="/home">
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
                maxlength="140"
                data-parsley-maxlength-message="Su tweet excede los 140 caracteres"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-pill tweetButton"
            >
              Tweet
            </button>
          </form>
          { resData.tweets.map(tweet => {
          return (<Tweet tweet={tweet} ownTweet={setResData.ownTweet} />)
        })
        }
        </div>
      </div>
      {/*      <footer><%- include('./partials/scripts.ejs'); %></footer> */}
    </div>
  );
}
export default Home;
