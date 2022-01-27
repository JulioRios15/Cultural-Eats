import React, { useState } from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Modal from "./components/Modal"


export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
       <Navbar></Navbar>
       <button onClick={() => setShow(true)}>Sign-in</button>
       <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

