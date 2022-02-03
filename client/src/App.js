import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";

//Pages
import SavedRecipes from "./pages/SavedRecipes";
import SignupForm from "./components/Modal/Sign-up";
import LoginForm from "./components/Modal/Sign-in";
import Filter from "./pages/Filter";
import Landing from "./pages/Landing";
import RecipeDetails from './pages/RecipeDetails';

export default function App() {
  return (
    <BrowserRouter>
      <StyledApp className="App">
        <StyledNavbarWrapper>
          <Navbar />
        </StyledNavbarWrapper>
        <StyledContentWrapper>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Saved-Recipes" element={<SavedRecipes/>} />
            <Route path="/Recipes" element={<Filter/>} />
            <Route path="Recipes/:idMeal" element={<RecipeDetails/>} />
            <Route path="/Sign-Up" element={<SignupForm/>} />
            <Route path="/Sign-In" element={<LoginForm/>} />
          </Routes>
        </StyledContentWrapper>
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div``;

const StyledNavbarWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div``;
