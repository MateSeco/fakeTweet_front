import React, { useEffect, useState } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Followers() {
  const token = useSelector((state) => state.user.token);
  const params = useParams();
  const [resData, setResData] = useState({});

  useEffect(() => {
    /* reqGet(`${params.username}/followers`, token)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err)); */
    axios
      .get(`http://localhost:8000/users/${params.username}/followers`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setResData({
          ...resData,
          followers: res.data.followers,
        });
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        {resData.followers && (
          <div className="shadow pr-5 pl-5 pb-5 feedContainer">
            <div className="follow">
              <h2>Followers</h2>
              <ul className="list-unstyled">
                <hr />
                {resData.followers.map((follower) => {
                  return (
                    <div className="media mt-5 mb-5">
                      <img
                        src={`${process.env.REACT_APP_URL}${follower.image}`}
                        className="mr-3 rounded-circle profileImageTweet"
                        alt="..."
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          <span>
                            <Link
                              to={`/${follower.userName}`}
                              className="links"
                            >
                              {" "}
                              {follower.firstName} {follower.lastName}
                            </Link>
                          </span>
                          <span className="text-muted">
                            @{follower.userName}{" "}
                          </span>
                        </h5>
                        {follower.description}
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Followers;
