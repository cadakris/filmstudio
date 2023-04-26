import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Blurbs from './components/Blurb/Blurbs';
import StudioMainPage from './components/Studios/StudioMainPage';
import MainFooter from "./components/Footer/MainFooter"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './styles/_app.scss'
// import './App.css';


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Blurbs />
    <MainFooter />
    </>
  );
}

export default App;
