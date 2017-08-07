import {
  createStore
} from 'redux';

import {
  ADD_DISK,
  CHANGE_PLAYER,
  CHECK_WINNER
} from './actions'

import {
  addDisk,
  checkWinner,
  changePlayer
} from './helperFuncs'

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
  changePlayer: true,
  plays: 0
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
        player: (state.won === false && state.changePlayer === true) ? changePlayer(state.player) : state.player
      }

    case CHECK_WINNER:
      {
        return (state.won === false) ? checkWinner({ ...state
        }) : {...state}
      }

    default:
      return state;
  }
}



export default createStore(reducer);