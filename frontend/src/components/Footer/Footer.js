import React from 'react';
import './Footer.css';
import {
  FacebookRounded,
  Google, Instagram, X, YouTube
} from "@mui/icons-material";
import {Divider} from "@mui/material";
import {ColoredLogo, MinimalIcon} from "../MyIcons/MyIcons";


const Footer = () => {
  const toDate = new Date().getFullYear();
  return (
    <>
      <footer className="Footer" data-testid="Footer">
        <div className="footer-div">
          <div className="f-column">
            <MinimalIcon/>
            <div className="unordered-icons">
              <Google id="google" className="f-item"/>
              <FacebookRounded id="facebook" className="f-item"/>
              <YouTube id="youtube" className="f-item"/>
              <Instagram id="instagram" className="f-item"/>
              <X id="twitter" className="f-item"/>
            </div>
          </div>

          <div className="f-column">
            <h4>Resources</h4>
            <ul className="unordered-links">
              <li className="col-item">Projects</li>
              <li className="col-item">Games</li>
              <li className="col-item">Download</li>
              <li className="col-item">Refs</li>
            </ul>
          </div>

          <div className="f-column">
            <h4>Resources</h4>
            <ul className="unordered-links">
              <li className="col-item">Projects</li>
              <li className="col-item">Games</li>
              <li className="col-item">Download</li>
              <li className="col-item">Refs</li>
            </ul>
          </div>

          <div className="f-column">
            <h4>Resources</h4>
            <ul className="unordered-links">
              <li className="col-item">Projects</li>
              <li className="col-item">Games</li>
              <li className="col-item">Download</li>
              <li className="col-item">Refs</li>
            </ul>
          </div>

          <div className="f-column">
            <h4>Resources</h4>
            <ul className="unordered-links">
              <li className="col-item">Projects</li>
              <li className="col-item">Games</li>
              <li className="col-item">Download</li>
              <li className="col-item">Refs</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright 2023-{toDate}&nbsp;
            LazStudios<sup><sup>&reg;</sup></sup> &nbsp;
            <Divider color="brown" orientation="vertical" variant="medium" flexItem id="separator"/>
            <Divider color="brown" orientation="vertical" variant="medium" flexItem id="separator"/>
            &nbsp; All Rights Reserved.
          </p>
          <i className="made-by">Made by &nbsp;
            <span>
              <a href="https://github.com/TheGlowFoundation">TheGlowFoundation</a>
            </span>
          </i>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
