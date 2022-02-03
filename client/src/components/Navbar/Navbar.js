import React, { useState } from "react";
import { Navbar, Container, Nav, Button, ToggleButton } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Authservice from "../../utils/auth"
import styled from "styled-components"
export default function Navibar() {
  function handleLogout(e){
    e.preventDefault()
    Authservice.logout()
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Cultural-Eats
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/Recipes" as={NavLink}>
              Recipes
            </Nav.Link>
            <Nav.Link to="/Saved-Recipes" as={NavLink}>
              Saved-Recipes
            </Nav.Link>
            {Authservice.loggedIn() 

            ? (<Nav.Link as={LogoutBtn} onClick={handleLogout}>Logout</Nav.Link>) 
            : (<>   <Nav.Link to="/Sign-in" as={NavLink}>
              Sign-in
            </Nav.Link>
            <Nav.Link to="/Sign-up" as={NavLink}>
              Sign Up
            </Nav.Link></>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const LogoutBtn = styled.button `
display:inline-block;
padding:0 auto;
border:none;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
text-align:center;
transition: all 0.2s;
width: 5em;
}
:hover{
color:#000000;
background-color:#808080;
}
@media all and (max-width:10em){
a.button1{
display:block;
margin:0.4em auto;}
`