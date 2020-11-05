import React, { useEffect } from "react";
import NavComponent from "./NavComponent";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Followers() {
  const token = useSelector((state) => state.token);
  let { username } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/${username}/followers`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <div className="follow">
            <h2>Followers</h2>
            <ul className="list-unstyled">
              {/*  user.followers.forEach((user) => */}
              <hr />
              <div className="media mt-5 mb-5">
                <img
                  src=""
                  className="mr-3 rounded-circle profileImageTweet"
                  alt="..."
                />
                <div className="media-body">
                  <h5 className="mt-0">
                    <span>
                      <Link to={"/user.userName"} className="links">
                        {" "}
                        user.fullName
                      </Link>
                    </span>
                    <span className="text-muted">@user.userName </span>
                  </h5>
                  user.description
                </div>
              </div>

              {/*    <%}); %> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followers;
