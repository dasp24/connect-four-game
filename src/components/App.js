import React, { Component } from 'react';
import Title from './Title';
import Turn from './Turn';
import Board from './Board';
import Choice from './Choice';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <Turn />
      <Board />
      <Choice />
      </div>
    );
  }
}

export default App;
