import React, { Component } from "react";
import "../Header/Header.css";

class Header extends Component {
    render() {
      return (
        <div>
        <header className="header">
        <div className="boxed">
        <p>Sloth Clicky Game</p>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        <h2>Guess all 12 corrrectly to win.</h2>
        </div>
        </header>
        </div>
       
      );
    }
  }
  
  export default Header;

