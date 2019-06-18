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


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {images: [sloth1, sloth2, sloth3, sloth4, sloth5, sloth6, sloth7, sloth8, sloth9, sloth10, sloth11, sloth12]}
        this.shuffle=this.shuffle.bind(this)
    }

    componentWillMount() {
        this.shuffle(this.state.images)
    }

    shuffle(array) {
        this.setState({images: array.sort(() => Math.random() - 0.5)})
        
    }

    // handleClick(e) {
    //     e.preventDefault();
    //     console.log("clicked")
    //     this.shuffle(this.state.images)
    // }


    render() {
        // this.shuffle(this.state.images)
        return (
            <main className="container">
                <div className="row">
                    {
                        this.state.images.slice(0, 4).map((image, i) => {
                            return (
                                <div key={i} className="column">
                                    <img onClick={e => this.props.handleClick(e, this.state.images, this.shuffle, image)} alt={"sloth" + i} src={image}></img>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="row">
                {
                        this.state.images.slice(4, 8).map((image, i) => {
                            return (
                                <div key={i} className="column">
                                    <img onClick={e => this.props.handleClick(e, this.state.images, this.shuffle, image )} alt={"sloth" + i} src={image}></img>
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="row">
                {
                        this.state.images.slice(8).map((image, i) => {
                            return (
                                <div key={i} className="column">
                                    <img onClick={e => this.props.handleClick(e, this.state.images, this.shuffle, image )} alt={"sloth" + i} src={image}></img>
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