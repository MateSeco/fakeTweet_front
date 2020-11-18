import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../redux/Actions/tweetActions";

function CreateTweet() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);
  const [content, setContent] = useState("");

  function sendTweet(e) {
    e.preventDefault();
    const tweet = { content: content };
    /* reqPost("/home", tweet, token).then((res) => res); */
    axios
      .post(`${process.env.REACT_APP_URL}/tweets`, tweet, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(tweets);

        dispatch(actions.addTweet(res.data));
      });
  }

  return (
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
  );
}

export default CreateTweet;
