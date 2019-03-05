import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
    }
  }
  recordStrike = () => {
    if (this.state.strikes === 2) {
      this.setState({balls:0, strikes:0})
    } else {
      this.setState({strikes:this.state.strikes + 1})
    }
  }
  recordBall = () => {
    if (this.state.balls === 3) {
      this.setState({balls:0, strikes:0})
    } else {
      this.setState({balls: this.state.balls + 1})
    }
  }
  recordFoul = () => {
    if (this.state.strikes < 2) {
      this.setState({strikes: this.state.strikes + 1})
    }
  }
  recordHit = () => {
    this.setState({balls:0, strikes:0})
  }
  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
