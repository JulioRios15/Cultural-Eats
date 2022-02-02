import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Homepage from "../../pages/HomePage";
import Recipes from "../../pages/Recipes";
import SavedRecipes from "../../pages/SavedRecipes";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Filter from "../../pages/Filter"
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
          <Routes>
              <Route path="/" element={Homepage()}/>
              <Route path="/Recipes" element={Recipes()}/>
              <Route path="/Saved-Recipes" element={SavedRecipes()}/>
              <Route path="/Filter" element={Filter()}/>
              <Route path="/Sign-in" element={SignIn()}/>
              <Route path="/Sign-up" element={SignUp()}/>
            </Routes>
        </BrowserRouter>
              <NavLink activeClassName="active" as={NavLink} to="/Saved-Recipes">Saved Recipes</NavLink>
              <NavLink activeClassName="active" as={NavLink} to="/Grocery-Cart">Grocery Cart</NavLink>
              <NavLink activeClassName="active" as={NavLink} to="/AuthPage">AuthPage</NavLink>
            </Nav>           
      </Container>
    </Navbar>  
  );
}
