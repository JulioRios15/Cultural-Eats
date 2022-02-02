import React, {useState} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navibar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={NavLink} to="/">Cultural-Eats</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link to="/Recipes" as={NavLink}>Recipes</Nav.Link>
      <Nav.Link to="/Saved-Recipes" as={NavLink}>Saved-Recipes</Nav.Link>
      <Nav.Link to="/Filter" as={NavLink}>Filter</Nav.Link>
      <Nav.Link to="/Sign-in" as={NavLink}>Sign-in</Nav.Link>
      <Nav.Link to="/Sign-up" as={NavLink} >Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}


