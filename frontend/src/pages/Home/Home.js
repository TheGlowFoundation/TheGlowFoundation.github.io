import React from 'react';
import './Home.css';

import HeroImage from "../assets/icon_named.png"
import {Button, ButtonBase} from "@mui/material";
import "@material/web/button/filled-button";

const Home = () => (
  <div className="Home" data-testid="Home">
    <Hero />
  </div>
);

export const Hero = () => {
    return (
        <div className="hero" id="home-hero" >
          <h1>Progress is possible</h1>
          <p>Simple and powerful analytics that helps everyone make better decisions.</p>
          <md-filled-button variant="contained">Let's Build</md-filled-button>
        </div>
    )
}

export default Home;
