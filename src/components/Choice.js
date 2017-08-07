import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addDisk, changePlayer, checkWinner} from '../redux/store';

class Choice extends Component {
    constructor() {
        super();
        this.style = {
            display: 'inline-block',
            textdecoration: 'none',
            margin: '15px',
            width: '5px',
            position: 'relative',
            right: '24px'

            };
        
    }
     onClick(val) {
         this.props.addDisk(val);
         this.props.checkWinner();
         this.props.changePlayer();
     }
  render() {
    return (
      <div className="Choice">
          <ul>
              <li style={this.style} onClick={() => {this.onClick(0);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(1);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(2);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(3);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(4);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(5);}}><button></button></li>
              <li style={this.style} onClick={() => {this.onClick(6);}}><button></button></li>
          </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addDisk: (val) => dispatch(addDisk(val)),
        checkWinner: () => dispatch(checkWinner()),
        changePlayer: () => dispatch(changePlayer())
    };
}

export default connect(null,mapDispatchToProps)(Choice);
