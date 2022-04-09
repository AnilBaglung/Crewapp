import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contactpage from './Components/Contact/Contactpage';

function App() {
  return (
    <>
    <Router>
      <Routes> 
        <Route path='/' element= {<Home/>} exact/>
        <Route path='/contact' element= {<Contactpage/>} exact/>
      </Routes> 
    </Router>
    </>

  );
}

export default App;
