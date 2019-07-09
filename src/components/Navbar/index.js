//setting up the Navbar component
import React from "react";
import "../Navbar/Navbar.css";

function Navbar(props) {
  console.log(props);

  return (

    <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li className="itemLeft"><a href="/">Clicky Game</a></li>
        <li className="itemCenter">Test Your Memory</li>
        <li className="itemRight">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>

  );
}

export default Navbar;