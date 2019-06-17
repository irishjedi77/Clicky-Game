import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Game from "./components/Game";


class App extends Component {
    render () {
        return (
            <div className="App">
               <Navbar />
               <Header />
               <Container />
               <Footer />
               <Game />
            </div>
        )
    }
}


export default App;
