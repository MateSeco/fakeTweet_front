import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userActions from "../redux/Actions/userActions";

function NavComponent() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.userName);

  return (
    <div>
      <Navbar bg="primary" variant="dark" className="twitter">
        <div className="container">
          <Navbar.Brand as={Link} to="/home">
            <h1>
              <span className="fakeTwitter">fake</span> Twitter
            </h1>
          </Navbar.Brand>
          {username && (
            <Nav className="ml-auto accountStyle">
              <NavDropdown
                title={`${username}`}
                id="collasible-nav-dropdown"
                className="accountStyle"
              >
                <NavDropdown.Item as={Link} to={`/${username}`}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/${username}/settings`}>
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => dispatch(userActions.loggedOut())}
                  as={Link}
                  to={`/`}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </div>
      </Navbar>
    </div>
  );
}

export default NavComponent;
