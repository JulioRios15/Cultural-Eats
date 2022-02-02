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
import GroceryCart from "./pages/GroceryCart";
import AuthPage from "./pages/AuthPage";

import { setContext } from '@apollo/client/link/context'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <ApolloProvider client={client}>
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
                <Route path="/Grocery-Cart" element={GroceryCart()}/>
                <Route path="/AuthPage" element={AuthPage()}/>
            </Routes>
          </StyledContentWrapper>
        </StyledApp>
      </BrowserRouter>
    </ApolloProvider>
  );
}

const StyledApp = styled.div`

`;

const StyledNavbarWrapper = styled.div`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
`;

