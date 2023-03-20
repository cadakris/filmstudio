import React from 'react'

// import logo from './logo.svg';

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Blurbs from './components/Blurb/Blurbs';

import './styles/_app.scss'
// import './App.css';


function App() {
  return (
    <>

        <Navbar />
        <Hero />
        <Blurbs />

    </>
  );
}

export default App;
