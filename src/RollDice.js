import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { num: "one" };
    this.roll = this.roll.bind(this);
  }

  roll() {
    let rand = Math.floor(Math.random() * 6) + 1;
    this.setState({ num: rand.toString() });
  }
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <Die count={this.state.num} />
        <Die count={this.state.num} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
