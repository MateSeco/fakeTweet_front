import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import actions from "../redux/Actions/tweetActions";
import CreateTweet from "./CreateTweet";
import Suggestion from "./Suggestion";

function Home() {
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState("");
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);

  useEffect(() => {
    dispatch(actions.saveTweets([]));
    axios
      .get(`${process.env.REACT_APP_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log("err", err));

    axios
      .get(`${process.env.REACT_APP_URL}/tweets`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => dispatch(actions.saveTweets(res.data.tweets)))
      .catch((err) => console.log("err", err));
  }, []);

  console.log("SUGERENCIAS: ", suggestions);

  return (
    <div className="homeBody">
      <NavComponent />
      {!tweets.firstName && suggestions[0] && (
        <div className="container">
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <CreateTweet />
            <div className="row flex-wrap-reverse">
              <div className="col-md-8">
                {tweets.map((tweet) => {
                  return (
                    <Tweet
                      key={tweet._id}
                      tweet={tweet}
                      author={tweet.author}
                    />
                  );
                })}
              </div>
              <div className="col-md-4">
                <div className="row">
                  {suggestions.map((suggestion) => {
                    return (
                      <div className="col-6 col-md-12">
                        <Suggestion
                          key={suggestion._id}
                          suggestion={suggestion}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
