import {
  createStore
} from 'redux';

import {
  ADD_DISK,
  CHANGE_PLAYER,
  CHECK_WINNER
} from './actions'

import {addDisk, checkWinner, changePlayer} from './helperFuncs'

const initialState = {
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ],
  player: 'x',
  won: false,
};

export function reducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case ADD_DISK:
      {
        return addDisk({ ...state,
        }, action.column)

      }
    case CHANGE_PLAYER:
      return {
        ...state,
        player: changePlayer(state.player, state.won)
      }

    case CHECK_WINNER:
      return {
        ...state,
        won: (state.won === false) ? checkWinner(state.board, state.player, state.xPlayer, state.oPlayer) : state.won
      }

    default:
      return state;
  }
}



export default createStore(reducer);