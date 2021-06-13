import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Piplantri</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/gamemode">GameMode</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/">Log In</Nav.Link>
          <Nav.Link href="/">Sign Up</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
