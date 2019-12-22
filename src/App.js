import React, { Component } from 'react';

class App extends Component {
  state = { counter: 0 };

  increment = () => {
    let value = this.state.counter;
    value++;
    this.setState({ counter: value });
  };

  decrement = () => {
    let value = this.state.counter;
    value--;
    this.setState({ counter: value });
  };

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <hr></hr>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
