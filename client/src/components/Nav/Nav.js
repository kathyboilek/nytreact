import React from "react";
import "./Nav.css"



const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      New York Times React Scraper
    </a>
    <a className="navbar-item" id="articlesnav" href="/">
      Get Articles
    </a>
    <a className="navbar-item" id="savednav" href="/saved">
      Saved Articles
    </a>
    {/* <button type="button" onClick="/saved" href="/saved">Saved</button> */}
  </nav>
);

export default Nav;
