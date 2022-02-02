import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
//Components
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components';

//Pages
import Homepage from "./pages/HomePage";
import Recipes from "./pages/Recipes";
import SavedRecipes from "./pages/SavedRecipes";
import SignupForm from "./components/Modal/Sign-up"
import LoginForm from "./components/Modal/Sign-in"

export default function App() {
  return (
      <BrowserRouter>
        <StyledApp className="App">
          <StyledNavbarWrapper>
            <Navbar/>
          </StyledNavbarWrapper>
          <StyledContentWrapper>
            <Routes>
                <Route path="/" element={Homepage()}/>
                <Route path="/Recipes" element={Recipes()}/>
                <Route path="/Saved-Recipes" element={SavedRecipes()}/>
                <Route path="/Sign-Up" element={SignupForm()}/>
                <Route path="/Sign-In" element={LoginForm()}/>
            </Routes>
          </StyledContentWrapper>
        </StyledApp>
      </BrowserRouter>
  );
}

const StyledApp = styled.div`

`;

const StyledNavbarWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
`;

