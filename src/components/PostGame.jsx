import React, { Component } from "react";
import "./Play.css";

export default class PostGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultText: this.props.resultText,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="q-container">
          <h1>you got {this.props.result} correct answers!</h1>
          <h2>You know Daniel</h2>
          <div id="result">{this.state.resultText}</div>
          <button onClick={this.props.playGame}>Play again!</button>
        </div>
      </div>
    );
  }
}
