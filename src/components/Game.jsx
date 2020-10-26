import React, { Component } from "react";
import "./Play.css";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  checkAnswer = (i) => {
    if (i === this.props.answers[this.props.tracker]) {
      document.getElementById("result").innerHTML = "True";
      document.getElementById("result-container").className = "true";
      document.getElementById("container").classList.add("leave");
      setTimeout(
        function () {
          this.props.setTracker();
          this.props.setResult();
        }.bind(this),
        1500
      );
    } else {
      document.getElementById("result").innerHTML = "False";
      document.getElementById("result-container").className = "false";
      document.getElementById("container").classList.add("leave");
      setTimeout(
        function () {
          this.props.setTracker();
        }.bind(this),
        1500
      );
    }
  };

  postGame = () => {
    this.props.postGame();
  };

  render() {
    return (
      <>
        {this.props.questions.map((item, i) => {
          if (i === this.props.tracker) {
            return (
              <div className="container" id="container">
                <div className="q-container">
                  <div className="q-number">{this.props.tracker + 1}</div>
                  <div className="question">
                    <h1>{item.q}</h1>
                  </div>
                  <div className="answers">
                    <ol>
                      {item.a.map((item, i) => {
                        return (
                          <li>
                            <button
                              onClick={() => {
                                this.checkAnswer(i);
                              }}
                            >
                              {item}
                            </button>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                  <div className="counter">
                    {this.props.result}/{this.props.questions.length}
                  </div>
                </div>
                <div id="result-container">
                  <p id="result"></p>
                </div>
              </div>
            );
          } else if (this.props.tracker === this.props.questions.length) {
            this.postGame();
          }
        })}
      </>
    );
  }
}
