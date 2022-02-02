import React, { useState } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar'
//import SignIn from './components/Modal/Sign-in'
//import SignUp from './components/Modal/Sign-up'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
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
    <div className="App">
       <Navbar></Navbar>
       {/* <button onClick={() => setShowSignIn(true)}>Sign-in</button>
       <button onClick={() => setShowSignUp(true)}>Sign-up</button>
       <SignIn onClose={() => setShowSignIn(false)} show={showSignIn} />
       <SignUp onClose={() => setShowSignUp(false)} show={showSignUp} /> */}
    </div>
    </ApolloProvider>
  );
}

// document.querySelector('.img__btn').addEventListener('click', function() {
//   document.querySelector('.cont').classList.toggle('s--signup');
// });