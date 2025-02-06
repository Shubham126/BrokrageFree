import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login';
import PhoneNo from './components/PhoneNo';
import HomePage from './components/Homepage';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phoneno" element={<PhoneNo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
