import React, { Component } from "react";
import "./Play.css";

export default class preGame extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="q-container">
          <h1>Ready?</h1>
          <button onClick={this.props.playGame} className="playBtn">
            Play!
          </button>
        </div>
      </div>
    );
  }
}
