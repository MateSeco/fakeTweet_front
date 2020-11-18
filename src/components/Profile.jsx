import React, { useEffect } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import tweetActions from "../redux/Actions/tweetActions";
import profileActions from "../redux/Actions/profileActions";
import CreateTweet from "./CreateTweet";
import FollowButton from "./FollowButton";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const profile = useSelector((state) => state.profile);
  /* const state = useSelector((state) => state); */
  const token = user.token;
  const params = useParams();

  useEffect(() => {
    dispatch(tweetActions.saveTweets([]));
    dispatch(profileActions.addProfile({}));
    axios
      .get(`${process.env.REACT_APP_URL}/users/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(tweetActions.saveTweets(res.data.tweets));
        dispatch(profileActions.addProfile(res.data));
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <NavComponent />
      <div className="container">
        {profile.firstName && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <header>
              <div className="card-body">
                <div>
                  <img
                    className="profileImage rounded-circle media"
                    src={`${process.env.REACT_APP_URL}${profile.image}`}
                    alt=""
                  />
                </div>
                <h3 className="card-title">
                  {" "}
                  {profile.firstName} {profile.lastName}
                </h3>
                <h5 className="card-subtitle mb-2 text-muted">
                  @{profile.userName}
                </h5>
                <p className="card-text tweetFont ">{profile.description}</p>
                <div className="follows">
                  <span>
                    <Link
                      to={`/${params.username}/followers`}
                      className="links"
                    >
                      {profile.followers.length} Followers
                    </Link>
                  </span>
                  <span className="ml-4">
                    <Link
                      to={`/${params.username}/following`}
                      className="links"
                    >
                      {profile.following.length} Following
                    </Link>
                  </span>
                  {user.userId && profile._id !== user.userId && (
                    <FollowButton params={params} />
                  )}
                </div>

                {profile._id === user.userId && <CreateTweet />}
              </div>
            </header>

            {tweets.map((tweet) => {
              return <Tweet key={tweet._id} tweet={tweet} author={profile} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
