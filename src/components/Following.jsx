import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "./NavComponent";

function Following() {
  return (
    <div className="homeBody">
      <NavComponent />
      <div className="container">
        <div className="shadow pr-5 pl-5 pb-5 feedContainer">
          <div className="follow">
            <h2>Following</h2>
            <ul className="list-unstyled">
              {/*  user.following.forEach((user) =>{ */}
              <hr />
              <div className="media mt-5 mb-5">
                <img
                  src="<%- user.image %>"
                  className="mr-3 rounded-circle profileImageTweet"
                  alt="..."
                />
                <div className="media-body">
                  <h5 className="mt-0">
                    <span>
                      <Link to={"/user-userName"} className="links">
                        user.fullName
                      </Link>
                    </span>
                    <span className="text-muted">@ user.userName</span>
                  </h5>
                  user.description
                </div>
              </div>
              {/* <%}); %> */}
            </ul>
          </div>
        </div>
      </div>
      {/*  include('./partials/scripts.ejs'); */}
    </div>
  );
}

export default Following;
