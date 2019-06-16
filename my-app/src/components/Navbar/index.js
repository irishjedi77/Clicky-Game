//setting up the Navbar component
import React, { Component } from "react";
import "../Navbar/Navbar.css";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft"><a href="/">Clicky Game</a></li>
          <li className="itemCenter">Test Your Memory</li>
          <li className="itemRight">Score: 0 | Top Score: 0{this.props.score}</li>
        </ul>
      </nav>
     
    );
  }
}

export default Navbar;