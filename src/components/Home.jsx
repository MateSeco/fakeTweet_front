import React, { useEffect } from "react";
import NavComponent from "./NavComponent";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const token = useSelector((state) => state.token);

  useEffect(() => {
  axios
      .get(`http://localhost:8000/home`, {headers: {'Authorization':`Bearer ${token}`}},)
      .then((res) => res.data)
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
          {/* 
        <% for(let j = 0; j < tweets.length; j++) { %>
        <hr />
        <%- include('./partials/tweet.ejs', {user:tweets[j].author, tweets:
        tweets[j], ownTweet: false}) %> <% } %> */}
        </div>
      </div>
      {/*      <footer><%- include('./partials/scripts.ejs'); %></footer> */}
    </div>
  );
}
export default Home;
