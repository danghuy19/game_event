import React, { Component } from "react";
import "./css/GameCss.css";
import car from "./img/car.png"

export default class GameEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 1,
      positionRoad: 100,
      time: 0,
      score: 0,
      move: 49
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.runGame.bind(this), 40);
  }

  runGame = () => {
    this.setState({
    //   speed: 1 + Math.ceil(this.state.time / 10000),
      positionRoad: this.state.positionRoad + this.state.speed,
      time: this.state.time + 40,
      score: this.state.score + this.state.speed
    });
  };

  onMove = (e) => {
    if(e.keyCode == 37) {
        if(this.state.move > 49) {
            this.state.move = this.state.move - 0.5
        }
    } else if (e.keyCode == 39) {
        if(this.state.move <= 53) {
            this.state.move = this.state.move + 0.5
        }
    }
    if(e.keyCode == 38) {
        this.setState({
            speed: this.state.speed + 1
        })
    }
    // if(e.keyCode == 40) {
    //     this.setState({
    //         speed: this.state.speed - 1
    //     })
    // }
  }

  render() {
    return (
      <div>
        <div
          className="game-container"
          style={{ backgroundPosition: "0 " + this.state.positionRoad + "px" }}
        >
            <div className="score">{this.state.score}</div>
            <div className="speed">Speed: {this.state.speed}</div>
          <div className="player" style={{ left: this.state.move + '%' }}><img src={car} alt="" /></div>
          <input type="text" className="control" id="control" onKeyDown={this.onMove} autoFocus />
        </div>
      </div>
    );
  }
}
