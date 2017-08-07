import React, { Component } from 'react';
import {connect} from 'react-redux';

class Turn extends Component {
  render() {
        if (this.props.player === null || this.props.won) return <h3>Game over</h3>;
        else if (this.props.player === 'x') return <h3>Reds turn</h3>;
        else if (this.props.player === 'o') return <h3>Yellows turn</h3>;
    ;
  }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        won: state.won
    };

// need some sort of function that represents a null in an array as something

// another function that repesents x as green and y as blue or whatever colour
}

export default connect(mapStateToProps)(Turn);