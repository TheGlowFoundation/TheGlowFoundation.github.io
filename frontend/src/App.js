import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Articles from "./pages/Articles/Articles";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginPage from "./pages/LoginPage/LoginPage";
import Footer from "./components/Footer/Footer";
import Games from "./pages/Games/Games";
import {Divider} from "@mui/material";
import React from "react";


function App() {
  return (
    <>
      {/* Renders the Navbar */}
      <NavBar homepage={"/"} siteName={"Lazaro Osee"}/>
      <Divider orientation="horizontal" variant="medium" flexItem/>

      {/*Displays content according to clicked route*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
