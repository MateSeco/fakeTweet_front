import React, { useState, useEffect } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import tweetActions from "../redux/Actions/tweetActions";
import profileActions from "../redux/Actions/profileActions";
import CreateTweet from "./CreateTweet";
import FollowButton from "./FollowButton";
import Suggestions from "./Suggestions";
import NavLateral from "./NavLateral"

function Profile() {
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState("");
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const profile = useSelector((state) => state.profile);
  const token = user.token;
  const params = useParams();

  useEffect(() => {

    axios
      .get(`${process.env.REACT_APP_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log("err", err));
  }, []);

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
  /*comentario*/

  return (
    <div className="">
      <NavComponent />
      {profile.firstName && (
        <div className="row no-gutters flex-wrap-reverse">

          <div className="col-lg-3"><NavLateral user={user} /></div>
          <div className="col-lg-5">
            <div className="pb-5 feedContainer">
              <header>
                <div className="card-body">
                  <div>
                    <img
                      className="profileImage rounded-circle media"
                      src={`${process.env.REACT_APP_URL_S3}${profile.image}`}
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
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-none d-lg-block suggestions-container">
              <div className="suggestions-content">
                <h5>Who to follow</h5>
                {suggestions[0] && <div className="row mb-3">
                  {suggestions.map((suggestion) => {
                    return (
                      <div className="col-12">
                        <Suggestions />
                      </div>
                    );
                  })}
                </div>}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Profile;
