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
            score: 0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e, images, cb, props) {
        e.preventDefault();
        console.log(props)
        if(props in this.state.clickPhotos){
            console.log("already clicked")
        } else{
            const temp=this.state.clickPhotos
            temp[props] = true
            let newScore = this.state.score
            newScore++
            // console.log(newScore)
            this.setState({clickPhotos: temp, score: newScore})
            console.log(this.state.score)
        }
        cb(images)
    }

    render() {
        return(

            <Navbar score={this.state.score}/>,
            <Header />,
            <Container handleClick={this.handleClick}/>
           
    

        )
        
    }
}

export default Game;