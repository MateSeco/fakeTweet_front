import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavComponent() {
  return (
    <Navbar bg="primary" variant="dark" className="twitter">
      <div className="container">
        <Navbar.Brand href="/home">
          <h1>
            <span class="fakeTwitter">fake</span> Twitter
          </h1>
        </Navbar.Brand>
        <Nav className="ml-auto accountStyle">
          <NavDropdown
            title="Account"
            id="collasible-nav-dropdown"
            className="accountStyle"
          >
            <NavDropdown.Item href="/:username">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/description">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavComponent;
