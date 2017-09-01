import React, { Component } from 'react';
import {connect} from 'react-redux';

class Turn extends Component {
  render() {
        if (this.props.player === null) return <h2>It's a tie</h2>;
        else if (this.props.won) return <h2>{this.props.won}</h2>;
        else if (this.props.player === 'x') return <h3>Red to go!</h3>;
        else if (this.props.player === 'o') return <h3>Yellow to go!</h3>;
    
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