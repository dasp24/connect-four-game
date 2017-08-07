import React, { Component } from 'react';
import {connect} from 'react-redux';
import {style} from './App.css';

import {resetGame} from '../redux/store';

class Again extends Component {
    render() {
        if (this.props.won) return <button id='again' onClick={() => {this.props.resetGame();}}>Play again?</button>
        else return null;
  }
}

function mapStateToProps(state) {
    return {
     won: state.won,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    resetGame: () => dispatch(resetGame(dispatch)),
    };
}
    

export default connect(mapStateToProps,mapDispatchToProps)(Again);