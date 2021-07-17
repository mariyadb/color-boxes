import React, { Component } from "react";
import { generateRandomColor } from "./helper";
import "./Box.css";

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: generateRandomColor() };
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor = generateRandomColor();
        this.setState({ color: newColor });
    }

    handleClick() {
        this.pickColor();
    }

    render() {
        return (

            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
            </div>
        );
    }
}

export default Box;