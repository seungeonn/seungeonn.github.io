import React from 'react';
import logo from './logo.svg';
import './App.css'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import {Header} from './components/Header'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        {/* <Route path='/Home' element={<About/>}></Route>
        <Route path='/Home' element={<Product/>}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
