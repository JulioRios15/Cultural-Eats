import React, { useState } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SignIn from './components/Modal/Sign-in'
import SignUp from './components/Modal/Sign-up'



export default function App() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  return (
    <div className="App">
       <Navbar></Navbar>
       <button onClick={() => setShowSignIn(true)}>Sign-in</button>
       <button onClick={() => setShowSignUp(true)}>Sign-up</button>
       <SignIn onClose={() => setShowSignIn(false)} show={showSignIn} />
       <SignUp onClose={() => setShowSignUp(false)} show={showSignUp} />

    </div>
  );
}

