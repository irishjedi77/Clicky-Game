import React, { Component } from "react";
import "../Container/Container.css";

class Container extends Component {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="column">
                        <img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth1.jpeg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth2.jpg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth3.jpg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth4.jpeg")}></img></div>
                </div>
                <div className="row">
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth5.jpg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth6.jpeg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth7.jpeg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth8.jpeg")}></img></div>
                </div>
                <div className="row">
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth9.jpg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth10.jpg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth11.jpeg")}></img></div>
                    <div className="column"><img src={require("/Users/irishjedi77/code/homework/Clicky-Game/my-app/src/images/sloth12.jpeg")}></img></div>
                </div>
            </main>

        );
    }
}

export default Container;