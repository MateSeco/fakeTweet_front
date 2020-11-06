import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "./Tweet";
import { reqGet } from "../utils/reqCalls";
import actions from "../redux/Actions/tweetActions" 
import CreateTweet from "./CreateTweet"

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.tweetReducer);
  const state = useSelector((state) => state);
  const token = state.userReducer.token;
  const params = useParams();
/*   const [resData, setResData] = useState({}); */

  useEffect(() => {
    /* reqGet(`/${params.username}`, token) */
    axios
      .get(`${process.env.REACT_APP_URL}/users/${params.username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("LLAMADA DE PROFILE",res.data);
        dispatch(actions.saveTweets(res.data))
      })
      .catch((err) => console.log(err));
  }, []);

  return(<div>HELLO</div>)
  /* return (
    <div>
      <NavComponent />
      <div className="container">
        {user.firstName && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <header>
              <div className="card-body">
                <div>
                  <img
                    className="profileImage rounded-circle media"
                    src={`${process.env.REACT_APP_URL}${user.image}`}
                    alt=""
                  />
                </div>
                <h3 className="card-title">
                  {" "}
                  {user.firstName} {user.lastName}
                </h3>
                <h5 className="card-subtitle mb-2 text-muted">
                  @{user.userName}
                </h5>
                <p className="card-text tweetFont ">
                  {user.description}
                </p>
                <div className="follows">
                  <span>
                    <Link
                      to={`/${params.username}/followers`}
                      className="links"
                    >
                      Followers
                    </Link>
                  </span>
                  <span className="ml-4">
                    <Link
                      to={`/${params.username}/following`}
                      className="links"
                    >
                      {user.following.length} Following
                    </Link>
                  </span>
                  <Link to={`/:${params.username}/follow`}>
                    <button className="tweetButton rounded-pill btn btn-primary ">
                      follow
                      
                    </button>
                  </Link>
                </div>
            
                <CreateTweet />
              </div>
            </header>
            
            {user.tweets.map((tweet) => {
              return <Tweet tweet={tweet} author={user} />;
            })}
          </div>
        )}
      </div>
    </div>
  ); */
}

export default Profile;
