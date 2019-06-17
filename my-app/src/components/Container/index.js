import React, { Component } from "react";
import "../Container/Container.css";

import sloth1 from "../../images/sloth1.jpeg";
import sloth2 from "../../images/sloth2.jpg";
import sloth3 from "../../images/sloth3.jpg";
import sloth4 from "../../images/sloth4.jpeg";
import sloth5 from "../../images/sloth5.jpg";
import sloth6 from "../../images/sloth6.jpeg";
import sloth7 from "../../images/sloth7.jpeg";
import sloth8 from "../../images/sloth8.jpeg";
import sloth9 from "../../images/sloth9.jpg";
import sloth10 from "../../images/sloth10.jpg";
import sloth11 from "../../images/sloth11.jpeg";
import sloth12 from "../../images/sloth12.jpeg";

const images = [sloth1, sloth2, sloth3, sloth4, sloth5, sloth6, sloth7, sloth8, sloth9, sloth10, sloth11, sloth12]


class Container extends Component {
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    render() {
        this.shuffle(images)
        return (
            <main className="container">
                <div className="row">
                    {
                        images.slice(0, 4).map(image => {
                            return (
                                <div className="column">
                                    <img src={image}></img>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="row">
                {
                        images.slice(4, 8).map(image => {
                            return (
                                <div className="column">
                                    <img src={image}></img>
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="row">
                {
                        images.slice(8).map(image => {
                            return (
                                <div className="column">
                                    <img src={image}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </main>

        );

    }

}

export default Container;