import React, { Component } from 'react';
import {resetGame} from '../redux/store';
import {connect} from 'react-redux';

class Turn extends Component {
  render() {
        if (this.props.player === null) return <h2>It's a tie</h2>;
        else if (this.props.won) return <div onClick={() => {this.props.resetGame();}}><h2>{this.props.won}</h2><h4>Play again?</h4></div>;
        else if (this.props.player === 'x') return <h3>Santa to go!</h3>;
        else if (this.props.player === 'o') return <h3>The Grinch to go!</h3>;
    
  }
}

function mapStateToProps(state) {
    return {
        player: state.player,
        won: state.won
    };
}


function mapDispatchToProps(dispatch) {
    return {
    resetGame: () => dispatch(resetGame(dispatch)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Turn);