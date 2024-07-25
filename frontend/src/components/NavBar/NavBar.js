import React, {useState} from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import {AccountCircleOutlined, Login, Search} from "@mui/icons-material"
import {Button, IconButton} from "@mui/material";
import {MinimalIcon} from "../MyIcons/MyIcons";


//  List of NavBar routes
const routes = [
  {name: "projects", path: "/projects"},
  {name: "games", path: "/games"},
  {name: "articles", path: "/articles"},
  {name: "contacts", path: "/contact"},
  {name: "about", path: "/about"},
]

const NavLink = ({path, children, className}) => (
  <>
    <Link to={path} className={className}>{children}</Link>
  </>
)


// Account Btn to toggle AccountModal's visibility
const CustomAccountBtn = () => {
  let [isClicked, setIsClicked] = useState(false);
  let [isAccountVisible, setIsAccountVisible] = useState(false);

  const handleClick = (e) => {
    setIsClicked(!isClicked);

    if (isClicked) {
      setIsAccountVisible(true)
    } else {
      setIsAccountVisible(false)
    }
  }

  return (
    <IconButton onClick={handleClick}>
      <AccountCircleOutlined/>

      {/*move this code to App*/}
      {/*{isAccountVisible && (<AccountModal />)}*/}

    </IconButton>
  )
}

// Login Btn to toggle login Modal
const CustomLoginBtn = () => {
  let active = "login-link";
  let [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(!isClicked);

    if (isClicked) {
      active += "  active"
    } else {
      active = "login-link"
    }
  }

  return (

      <Button onClick={handleClick} variant="outlined">
        <Link to="/login" className={active} key={active}>
          Login
        </Link>
      </Button>
  )
}


const NavBar = function ({homepage, siteName}) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  let navArray = [];
  for (let route of routes) {
    navArray.push(route);
  }

  // todo() SET IS LOGGED IN FROM <APP/>

  return (
    <nav className="NavBar">

      {/*Site Name*/}
      <div className="site" >
        <NavLink className="site-title"  path={homepage}  children={<MinimalIcon className="minimla-icon"/>}/>
      </div>

      {/*Text Links*/}
      <ul className="nav-list">
        {/* @forEach()*/}
        {navArray.map((item, index) => (
          <li className="nav-list-item" key={index}>
            <NavLink className="nav-link" path={item.path} children={item.name} />
          </li>
        ))}
      </ul>

      {/*Icon Links*/}
      <ul className="nav-icon-list">
        <li><IconButton><Search/></IconButton></li>
        <li>{isLoggedIn ? (<CustomAccountBtn />) : (<CustomLoginBtn />)}</li>
      </ul>

    </nav>
  );
}


export default NavBar;
