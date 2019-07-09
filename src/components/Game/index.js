// import React from "react";
import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Container from "../Container";


class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickPhotos: {

            },
            score: 0,
            topScore: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e, images, cb, props) {
        e.preventDefault();
        console.log("Click", props)
        if (props in this.state.clickPhotos) {
            console.log("already clicked")
            alert("already clicked")
        } else {
            const temp = this.state.clickPhotos
            temp[props] = true
            let newScore = this.state.score
            newScore++
            let highScore = this.state.topScore
            highScore++
            // console.log(newScore)
            this.setState({ clickPhotos: temp, score: newScore, topScore: highScore })
            console.log(this.state.score)
        }
        cb(images)
        if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
    }

    render() {
        return (
            <>
                <Navbar score={this.state.score} topScore={this.state.topScore}/>
                <Header />
                <Container handleClick={this.handleClick} />
            </>
        )

    }
}

export default Game;