import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navibar() {
  return (
    <Navbar expand="lg">
      <Container>
          <NavLink activeClass="active" to="/">
            Cultural-Eats
          </NavLink>
            <Nav className="me-auto">
              <Nav.Link activeClassName="active" as={NavLink} to="/Recipes">Recipes</Nav.Link>
              <NavLink activeClassName="active" to="/Saved-Recipes">Saved Recipes</NavLink>
              <NavLink activeClassName="active" to="/Filter">Filter</NavLink>
              <NavLink activeClassName="active" to="/Sign-in">Sign In</NavLink>
              <NavLink activeClassName="active" to="/Sign-up">Sign Up</NavLink>
            </Nav>         
      </Container>
    </Navbar>  
  );
}
