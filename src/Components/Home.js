import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Button } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link className="home__headerLink" to="/about">
            About
          </Link>
          <Link className="home__headerLink" to="/store">
            Store
          </Link>
        </div>
        <div className="home__headerRight">
          <Link className="home__headerLink" to="/gmail">
            Gmail
          </Link>
          <Link className="home__headerLink" to="/images">
            Images
          </Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
