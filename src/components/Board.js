import React, { Component } from 'react';
import {connect} from 'react-redux';
import {style, santa} from './App.css';

const slotDimension = 30;
const slotStyle = {
    width: `${slotDimension}px`,
    height: `${slotDimension}px`,
    borderRadius: `${slotDimension / 2}px`,
    margin: '0 5px',
    display: 'inline-block',
    border: '2px solid black'    
};

class Board extends Component {
    renderSlot(slot) {
        switch (slot) {
            case 'x':
                 return <div id='santaPiece' style={{...slotStyle,  }} />;            
            case 'o':
                return <div id='grinchPiece' style={{...slotStyle, backgroundColor: 'green' }} />;
            default:
                return <div style={{...slotStyle, backgroundColor: 'teal' }} />;
        }
    }

  render() {
    return (
      <div className="Board">
        {this.props.visualBoard.map((row) => (
          <div>
            {row.map(this.renderSlot.bind(this))}
            <br />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
    const visualBoard = state.board.map(row => row.map(slot => slot ? slot : '_'));

    return {
        visualBoard,
        won: state.won
    };

// need some sort of function that represents a null in an array as something

// another function that repesents x as green and y as blue or whatever colour
}

export default connect(mapStateToProps)(Board);