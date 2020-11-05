import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function NavComponent() {
  const username = useSelector((state) => state.userName);
  console.log(username);
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="twitter">
        <div className="container">
          <Navbar.Brand href="/home">
            <h1>
              <span className="fakeTwitter">fake</span> Twitter
            </h1>
          </Navbar.Brand>

          <Nav className="ml-auto accountStyle">
            <NavDropdown
              title="Account"
              id="collasible-nav-dropdown"
              className="accountStyle"
            >
              <NavDropdown.Item>
                <Link to={`/${username}`}>Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/description">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default NavComponent;
