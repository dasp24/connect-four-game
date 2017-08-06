import {
    createStore
} from 'redux';

import {
   ADD_DISK, CHANGE_PLAYER, CHECK_WINNER
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
    won:false,
    lastPlayed:null
};

export function reducer(state = initialState, action) {
  console.log(state)
    switch (action.type) {
        case ADD_DISK:
             {
               return addDisk({...state,}, action.column) 
       
        }
        case CHANGE_PLAYER:
            return {
                ...state,
                player: (state.player === 'x') ? 'o' : 'x'
            }
        
        case CHECK_WINNER:
            return {
                ...state,
                won: checkWinner(state.board, state.lastPlayed, state.player)
            }
       
        default:
            return state;
    }
}

 function addDisk(state,col) {
   const newState = { ...state
    }
    let row = 5;
      while (newState.board[row][col] !== null) {
        row--;
        if (row < 0) return newState.board;
      }
      newState.lastPlayed = [row,col] 
      newState.board[row][col] = state.player;

    return newState;
    
}

function checkWinner (board, lastPlayed, player) {

    if (board[lastPlayed[0] + 3] !== undefined) {
      if (board[lastPlayed[0] + 1][lastPlayed[1]] === player && board[lastPlayed[0] + 2][lastPlayed[1]] === player && board[lastPlayed[0] + 3][lastPlayed[1]] === player) {
        return `${player} wins`;
      }
    }

    if (board[lastPlayed[0]][lastPlayed[1] + 3] !== undefined) {
      if (board[lastPlayed[0]][lastPlayed[1] + 1] === player && board[lastPlayed[0]][lastPlayed[1] + 2] === player && board[lastPlayed[0]][lastPlayed[1] + 3] === player) {
        return `${player} wins`;
      }
    }
    if (board[lastPlayed[0]][lastPlayed[1] + 3] !== undefined && board[lastPlayed[0] + 3] !== undefined) {
      if (board[lastPlayed[0] + 1][lastPlayed[1] + 1] === player && board[lastPlayed[0] + 2][lastPlayed[1] + 2] === player && board[lastPlayed[0] + 3][lastPlayed[1] + 3] === player) {
        return `${player} wins`;
      }
    }
    if (board[lastPlayed[0]][lastPlayed[1] - 3] !== undefined && board[lastPlayed[0] + 3] !== undefined) {
      if (board[lastPlayed[0] + 1][lastPlayed[1] - 1] === player && board[lastPlayed[0] + 2][lastPlayed[1] - 2] === player && board[lastPlayed[0] + 3][lastPlayed[1] - 3] === player) {
        return `${player} wins`;
      }
    }
  }


// function findWinner(board, pos, char) {
//   let lastPlayed = pos.shift();
//   while (pos.length >= 3) {
//     if (board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1]] === char && board[currentPos[0] + 2][currentPos[1]] === char && board[currentPos[0] + 3][currentPos[1]] === char) {
//         return `${char} wins`;
//       }
//     }

//     if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
//       if (board[currentPos[0]][currentPos[1] + 1] === char && board[currentPos[0]][currentPos[1] + 2] === char && board[currentPos[0]][currentPos[1] + 3] === char) {
//         return `${char} wins`;
//       }
//     }
//     if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1] + 1] === char && board[currentPos[0] + 2][currentPos[1] + 2] === char && board[currentPos[0] + 3][currentPos[1] + 3] === char) {
//         return `${char} wins`;
//       }
//     }
//     if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1] - 1] === char && board[currentPos[0] + 2][currentPos[1] - 2] === char && board[currentPos[0] + 3][currentPos[1] - 3] === char) {
//         return `${char} wins`;
//       }
//     }
//     currentPos = pos.shift();
//   }
// }

export default createStore(reducer);