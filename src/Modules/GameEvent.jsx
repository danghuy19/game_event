import React, { Component } from "react";
import "./css/GameCss.css";

export default class GameEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      positionRoad: 100,
      time: 0,
      score: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.runGame.bind(this), 40);
  }

  runGame = () => {
    this.setState({
      speed: 1 + Math.ceil(this.state.time / 10000),
      positionRoad: this.state.positionRoad + this.state.speed,
      time: this.state.time + 40,
      score: this.state.score + this.state.speed
    });
  };

  render() {
    return (
      <div>
        <div
          className="game-container"
          style={{ backgroundPosition: "0 " + this.state.positionRoad + "px" }}
        >
            <div className="score">{this.state.score}</div>
            <div className="speed">Speed: {this.state.speed}</div>
          <div className="player"></div>
        </div>
      </div>
    );
  }
}
