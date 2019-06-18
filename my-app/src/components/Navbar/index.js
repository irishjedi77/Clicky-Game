//setting up the Navbar component
import React, { Component } from "react";
import "../Navbar/Navbar.css";

class Navbar extends Component {
  constructor() {
    super()
    this.state= {
      score: 0
    }
  }

  // componentWillMount() {
  //   this.setState({score: this.props.score})
  // }


  render() {
    console.log(this.props)
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="itemLeft"><a href="/">Clicky Game</a></li>
          <li className="itemCenter">Test Your Memory</li>
          <li className="itemRight">Score: {this.state.score} | Top Score: 0</li>
        </ul>
      </nav>
     
    );
  }
}

export default Navbar;