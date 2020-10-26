import React, { Component } from "react";
import Game from "./Game";
import "./Play.css";
import PostGame from "./PostGame";
import PreGame from "./PreGame";

export default class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: "pre",
      questions: [
        {
          q: "Which martial arts did Daniel study?",
          a: ["Judo", "Carate", "Krav Maga", "Boxing"],
        },
        {
          q: "Which musical instrument did Daniel play?",
          a: ["Saxophone", "Piano", "Guitar", "Drums"],
        },
        {
          q: "With Which word does Daniel describes most anything?",
          a: ["Huge", "Eclectic", "Awsome", "Divine"],
        },
        { q: "How many languages does Daniel speak?", a: [2, 4, 5, 3] },
        {
          q:
            "Which class did Daniel skip in the 3rd grade only to get lost on the way home?",
          a: ["Computer", "Choir", "French", "Cooking class"],
        },
        {
          q: "What is Daniel's favourite alcohol?",
          a: ["Vodka", "Gin", "Tequila", "Rum"],
        },
        {
          q: "What is Daniel's favourite food?",
          a: ["Popcorn", "Shnitzel", "Hamburge", "Fries", "All of the above"],
        },
        {
          q: "What does Daniel do when he's stressed?",
          a: [
            "Takes deep breaths",
            "Eats",
            "Covers his head",
            "Walks in circles",
          ],
        },
      ],
      answers: [0, 3, 1, 1, 1, 1, 4, 2],
      tracker: 0,
      result: 0,
      resultText: "",
    };
  }
  play = () => {
    if (this.state.show === "pre") {
      return (
        <PreGame
          playGame={() => {
            this.setState({ show: "game" });
          }}
        />
      );
    } else if (this.state.show === "game") {
      return (
        <Game
          questions={this.state.questions}
          answers={this.state.answers}
          tracker={this.state.tracker}
          result={this.state.result}
          postGame={() => {
            this.setState({ show: "post" });
            this.resultText();
          }}
          setTracker={() => {
            this.setState({ tracker: this.state.tracker + 1 });
          }}
          setResult={() => {
            this.setState({ result: this.state.result + 1 });
          }}
        />
      );
    } else if (this.state.show === "post") {
      return (
        <PostGame
          result={this.state.result}
          questions={this.state.questions}
          playGame={() => {
            this.setState({ tracker: 0 });
            this.setState({ result: 0 });
            this.setState({ show: "game" });
          }}
          resultText={this.state.resultText}
        />
      );
    }
  };

  resultText = () => {
    if (this.state.result === this.state.questions.length) {
      this.setState({ resultText: "Perfect!" });
    } else if (
      this.state.result < Math.floor(this.state.questions.length * 0.33)
    ) {
      this.setState({
        resultText: "Not so well... Are you sure you're friends?",
      });
    } else if (
      this.state.result < Math.floor(this.state.questions.length * 0.66)
    ) {
      this.setState({
        resultText:
          "well enough, you should get to know him more! he's awsome!",
      });
    } else {
      this.setState({
        resultText:
          "amazingly! You must be a great person to be able to know him this well",
      });
    }
  };

  render() {
    return <>{this.play()}</>;
  }
}
