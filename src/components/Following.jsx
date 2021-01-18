import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import NavLateral from "./NavLateral"
import Suggestion from "./Suggestion";

function Following() {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const params = useParams();
  const [suggestions, setSuggestions] = useState("");
  const [resData, setResData] = useState({});


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setSuggestions(res.data))
      .catch((err) => console.log("err", err));
    axios
      .get(`${process.env.REACT_APP_URL}/users/${params.username}/following`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setResData({
          ...resData,
          following: res.data.following,
        });
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <NavComponent />
      <div className="">
        {resData.following && (

          <div className="row no-gutters flex-wrap-reverse">
            <div className="col-lg-3"><NavLateral user={user} /></div>
            <div className="col-lg-5"><div className="follow">
              <span>
                <Link to={`/${user.userName}`}><i class="fas fa-arrow-left fa-3x"></i></Link>
                <h2> Following</h2>
              </span>
              <ul className="list-unstyled">
                <hr />
                {resData.following.map((followed) => {
                  return (
                    <div className="media mt-5 mb-5">
                      <img
                        src={`${process.env.REACT_APP_URL_S3}${followed.image}`}
                        alt={`${followed.firstName} ${followed.lastName}`}
                        className="mr-3 rounded-circle profileImageTweet"
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          <span>
                            <Link
                              to={`/${followed.userName}`}
                              className="links"
                            >
                              {followed.firstName} {followed.lastName}
                            </Link>
                          </span>
                          <span className="ml-1 text-muted">
                            @{followed.userName}
                          </span>
                        </h5>
                        {followed.description}
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div></div>
            <div className="col-12 col-lg-4"><div className="d-none d-lg-block suggestions-container">
              <div className="suggestions-content">
                <h5>Who to follow</h5>
                {suggestions[0] && <div className="row mb-3">
                  {suggestions.map((suggestion) => {
                    return (
                      <div className="col-12">
                        <Suggestion
                          key={suggestion._id}
                          suggestion={suggestion}
                        />
                      </div>
                    );
                  })}
                </div>}
              </div>
            </div></div>
          </div>

        )}
      </div>
    </div>
  );
}

export default Following;
