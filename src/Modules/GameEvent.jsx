import React, { Component } from "react";
import "./css/GameCss.css";
import car from "./img/car.png";

export default class GameEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      positionRoad: 100,
      time: 0,
      score: 0,
      moveX: 49,
      moveY: 40,
      deg: 0,
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
      score: this.state.score + this.state.speed,
    });
  };

  onMove = (e) => {
    if (e.keyCode == 37) {
      if (this.state.moveX > 49) {
        this.setState({
          moveX: this.state.moveX - 0.5,
          deg: -5,
        });
      }
    } else if (e.keyCode == 39) {
      if (this.state.moveX <= 53) {
        this.setState({
          moveX: this.state.moveX + 0.5,
          deg: 5,
        });
      }
    }
    if (e.keyCode == 38) {
      if (this.state.moveY < 85) {
        this.setState({ moveY: this.state.moveY + 0.5 });
      }
    }
    if (e.keyCode == 40) {
      if (this.state.moveY > 36) {
        this.setState({ moveY: this.state.moveY - 0.5 });
      }
    }
  };

  onKeyUp = () => {
      this.setState({
          deg: 0
      })
  }

  focusGame = () => {
      let input = document.getElementById("control")
      input.focus()
  }

  render() {
    return (
      <div onClick={this.focusGame}>
        <div
          className="game-container"
          style={{ backgroundPosition: "0 " + this.state.positionRoad + "px" }}
        >
          <div className="score">{this.state.score}</div>
          <div className="speed">Speed: {this.state.speed}</div>
          <div
            className="player"
            style={{
              left: this.state.moveX + "%",
              bottom: this.state.moveY + "%",
              transform: "rotate(" + this.state.deg + "deg)"
            }}
          >
            <img src={car} alt="" />
          </div>
          <input
            type="text"
            className="control"
            id="control"
            onKeyDown={this.onMove}
            onKeyUp={this.onKeyUp}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
