import React from "react";
import "./Jumbotron.css"

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
  <h1>NYT Scraper React</h1>
    {children}
  </div>
);

export default Jumbotron;
