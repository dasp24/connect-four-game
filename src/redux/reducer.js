import {
  createStore
} from 'redux';

import {
  ADD_DISK,
  CHANGE_PLAYER,
  CHECK_WINNER
} from './actions'

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
  xPlayer: [],
  oPlayer: []
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
        player: (state.player === 'x') ? 'o' : 'x'
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

function addDisk(state, col) {
  const newState = { ...state
  }
  if (newState.won !== false) return newState
  let row = 5;
  while (newState.board[row][col] !== null) {
    row--;
    if (row < 0) return newState;
  }
  (newState.player === 'x') ? newState.xPlayer.push([row, col]): newState.oPlayer.push([row, col])

  newState.board[row][col] = state.player;

  return newState;

}

function checkWinner(board, player, xPos, oPos) {
  const positions = (player === 'x') ? xPos : oPos;
  let currentPos;

  for (let i = 0; i < positions.length;) {
    currentPos = positions[i]


    if (board[currentPos[0] + 3] !== undefined) {
      if (board[currentPos[0] + 1][currentPos[1]] === player && board[currentPos[0] + 2][currentPos[1]] === player && board[currentPos[0] + 3][currentPos[1]] === player) {
        return `${player} wins`;
      }
    }

    if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
      if (board[currentPos[0]][currentPos[1] + 1] === player && board[currentPos[0]][currentPos[1] + 2] === player && board[currentPos[0]][currentPos[1] + 3] === player) {
        return `${player} wins`;
      }
    }
    if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
      if (board[currentPos[0] + 1][currentPos[1] + 1] === player && board[currentPos[0] + 2][currentPos[1] + 2] === player && board[currentPos[0] + 3][currentPos[1] + 3] === player) {
        return `${player} wins`;
      }
    }
    if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
      if (board[currentPos[0] + 1][currentPos[1] - 1] === player && board[currentPos[0] + 2][currentPos[1] - 2] === player && board[currentPos[0] + 3][currentPos[1] - 3] === player) {
        return `${player} wins`;
      }
    } else {
      i++
    }
  }  return false;
}



export default createStore(reducer);