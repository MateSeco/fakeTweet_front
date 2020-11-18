import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/Actions/tweetActions";
import axios from "axios";

function LikeButton({ tweet }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.userId);
  const tweets = useSelector((state) => state.tweets);
  const [likes, setLikes] = useState(tweet.likes.length);
  const [likeButton, setLikeButton] = useState();

  useEffect(() => {
    setLikeButton(tweet.likes.includes(userId));
  }, [likes]);

  function handleLike() {
    tweet.likes.includes(userId)
      ? dispatch(actions.dislike(tweet._id, userId))
      : dispatch(actions.like(tweet._id, userId));

    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL}/tweets/${tweet._id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setLikes(res.data.likes);
      })
      .catch((err) => console.log("err", err));
  }
  console.log("like");

  return (
    <span>
      <button type="button" onClick={handleLike}>
        {likeButton ? (
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
