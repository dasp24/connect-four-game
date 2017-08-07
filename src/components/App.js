import React, { Component } from 'react';
import Title from './Title';
import Turn from './Turn';
import Board from './Board';
import Choice from './Choice';
import Again from './Again';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <div className="App">
          <Title />
          <Choice />
          <Board />
          <Turn />
          </div>
        <Again />
      </div>
    );
  }
}

export default App;
