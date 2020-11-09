import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Following() {
  const token = useSelector((state) => state.user.token);
  const params = useParams();
  const [resData, setResData] = useState({});
  useEffect(() => {
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
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        {resData.following && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <div className="follow">
              <h2>Following</h2>
              <ul className="list-unstyled">
                <hr />
                {resData.following.map((followed) => {
                  return (
                    <div className="media mt-5 mb-5">
                      <img
                        src={`${process.env.REACT_APP_URL}${followed.image}`}
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
            </div>
          </div>
        )}
      </div>
      {/*  include('./partials/scripts.ejs'); */}
    </div>
  );
}

export default Following;
