import React, { Component } from 'react';
import {connect} from 'react-redux';

class Turn extends Component {
  render() {
        return this.props.player === 'x' ? <h3>Reds turn</h3> : <h3>Yellows turn</h3>
    ;
  }
}

function mapStateToProps(state) {
    return {
        player: state.player
    };

// need some sort of function that represents a null in an array as something

// another function that repesents x as green and y as blue or whatever colour
}

export default connect(mapStateToProps)(Turn);