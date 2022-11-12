import React from 'react';
import Home from "./components/Home/Home";
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App