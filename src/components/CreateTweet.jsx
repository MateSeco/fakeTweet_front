import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../redux/Actions/tweetActions";

function CreateTweet() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);
  const [content, setContent] = useState("");
  const profile = useSelector((state) => state.profile);

  function sendTweet(e) {
    e.preventDefault();
    const tweet = { content: content };

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
    <form className="redactTweet pt-4" onSubmit={(e) => sendTweet(e)}>
      <div className="form-group createtweet-container">
        <div className="media pl-3">
          <Link to={user.userName}>
            <img type="image" src={`${process.env.REACT_APP_URL_S3}${user.image}`} alt={`${profile.userName}_picture`} className="mr-3 rounded-circle profileImageTweet" />
          </Link>
          <div className="media-body tweetContainer pr-3">
            <label for="content"></label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              name="content"
              onChange={(e) => setContent(e.target.value)}
              placeholder="Whats happening?"
              required=""
              maxLength="140"
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary rounded-pill tweetButton"
            >
              Tweet
      </button>
          </div>

        </div>

      </div>

    </form >
  );
}

export default CreateTweet;
