import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import GroceryCart from "../../pages/GroceryCart";
import Homepage from "../../pages/HomePage";
import Recipes from "../../pages/Recipes";
import SavedRecipes from "../../pages/SavedRecipes";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

export default function Navibar() {
  return (
    <Navbar>
      <Container>
        <BrowserRouter>
          <NavLink activeClass="active" to="/">
            Cultural-Eats
          </NavLink>
            <Nav className="me-auto">
              <Nav.Link activeClassName="active" as={NavLink} to="/Recipes">Recipes</Nav.Link>
              <NavLink activeClassName="active" to="/Saved-Recipes">Saved Recipes</NavLink>
              <NavLink activeClassName="active" to="/Grocery-Cart">Grocery Cart</NavLink>
              <NavLink activeClassName="active" to="/Sign-in">Sign In</NavLink>
              <NavLink activeClassName="active" to="/Sign-up">Sign Up</NavLink>
            </Nav>
          <Routes>
              <Route path="/" element={Homepage()}/>
              <Route path="/Recipes" element={Recipes()}/>
              <Route path="/Saved-Recipes" element={SavedRecipes()}/>
              <Route path="/Grocery-Cart" element={GroceryCart()}/>
              <Route path="/Sign-in" element={SignIn()}/>
              <Route path="/Sign-up" element={SignUp()}/>
            </Routes>
        </BrowserRouter>
      </Container>
    </Navbar>
  );
}