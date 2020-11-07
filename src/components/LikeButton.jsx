import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/Actions/tweetActions";
import axios from "axios";

function LikeButton({ tweet }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userReducer.token);
  const userId = useSelector((state) => state.userReducer.userId);
  const tweets = useSelector((state) => state.tweets);
  const [likes, setLikes] = useState(tweet.likes.length);
  const [pregunta, setPregunta] = useState();

  function handleLike() {
    tweet.likes.includes(userId)
      ? dispatch(actions.dislike(tweet._id, userId))
      : dispatch(actions.like(tweet._id, userId));
    /* reqGet(`/like/${tweetId}`, token) */
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL}/tweets/${tweet._id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setLikes(res.data.likes))
      /*     .then((r) => dispatch(actions.saveTweets(res.data.tweets)) */
      .catch((err) => console.log("err", err));
  }

  /*   useEffect(() => {
    setPregunta(tweet.likes.includes(userId));
  }, [likes]);
 */
  return (
    <span>
      <button type="button" onClick={handleLike}>
        {pregunta ? (
          <i className="fas fa-heart heart"></i>
        ) : (
          <i className="far fa-heart heart"></i>
        )}
      </button>
      {likes}
    </span>
  );
}
export default LikeButton;

/* 
return (
  <span>
    <button type="button" onClick={() => likeTweet(tweet._id)}>
      {pregunta ? (
        <i className="fas fa-heart heart"></i>
      ) : (
        <i className="far fa-heart heart"></i>
      )}
    </button>
    {likes}
  </span>
); */
