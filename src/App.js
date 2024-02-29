import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import OneOnOneMeeting from './Components/pages/OneOnOneMeeting';
import Packages from './Components/pages/Packages';
import GetStartedPage from './Components/pages/GetStartedPage';

function App() {
  return (
    <>
      <BrowserRouter basename="/masterswritings">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/one-on-one-meeting' element={<OneOnOneMeeting />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/get-started' element={<GetStartedPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
