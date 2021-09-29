import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className="fst-italic navbar-brand" to="/home">
            Welcome
          </NavLink>
          <Nav className="ms-auto">
            <NavLink
              activeStyle={{
                color: "red",
                fontWeight: "bold",
              }}
              className="text-white nav-link"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{
                color: "red",
                fontWeight: "bold",
              }}
              className="text-white nav-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeStyle={{
                color: "red",
                fontWeight: "bold",
              }}
              className="text-white nav-link"
              to="/latest"
            >
              Latest
            </NavLink>
            <NavLink
              activeStyle={{
                color: "red",
                fontWeight: "bold",
              }}
              className="text-white nav-link"
              to="/faq"
            >
              FaQ
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
