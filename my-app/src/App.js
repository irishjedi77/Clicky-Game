import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Game from "./components/Game";

// state = {
//     clickedImages: [],
//     score: 0,
//     goal: 12,
//     status: ""
//   };

class App extends Component {

    render () {
        return (
            <div className="App">
               <Navbar />
               <Header />
               <Game />
               <Footer />
            </div>
        )
    }

}


export default App;
