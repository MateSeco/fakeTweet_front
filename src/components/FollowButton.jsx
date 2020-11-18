import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import profileActions from "../redux/Actions/profileActions";
import axios from "axios";

export default function FollowButton({ params }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.userId);
  const profile = useSelector((state) => state.profile);
  const [followButt, setFollowButt] = useState("");
  let following = profile.followers.includes(userId);

  useEffect(() => {
    following ? setFollowButt("Following") : setFollowButt("Follow");
  }, [following]);

  function handleFollow() {
    if (following) {
      dispatch(profileActions.unfollow(userId));
      setFollowButt("Follow");
    } else {
      dispatch(profileActions.follow(userId));
      setFollowButt("Following");
    }

    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/users/${params.username}/follow`,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => console.log("RES: ", res));
  }

  return (
    <button
      onClick={() => handleFollow()}
      className="tweetButton rounded-pill btn btn-primary "
    >
      {followButt}
    </button>
  );
}
