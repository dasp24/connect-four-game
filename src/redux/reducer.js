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

    switch (action.type) {
        case ADD_DISK:
            return {
                ...state,
                board: addDisk(state,action.column)
       
        }
        case CHANGE_PLAYER:
            return {
                ...state,
                player: (state.player === 'x') ? 'o' : 'x'
            }
        
        case CHECK_WINNER:
            return {
                ...state,
                won: checkWinner(state.board, state.player)
            }
       
        default:
            return state;
    }
}

 function addDisk(state,col) {
    const board = [...state.board];
    let row = 5;
      while (board[row][col] !== null) {
        row--;
        if (row < 0) return board;
      }
      [row][col] = state.lastPlayed;
      board[row][col] = state.player;

    return board;
    
}

function checkWinner (board, player) {
    let positions = ()=>{const result = [];
  board.forEach((line, index) => {
    line.forEach((item, jindex) => {
      if (item === player) result.push([index, jindex]);
    });
  });
// console.log(result)
  return result;
    }
// let currentPos = positions.shift();
//   while (positions.length >= 3) {
//     if (board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1]] === player && board[currentPos[0] + 2][currentPos[1]] === player && board[currentPos[0] + 3][currentPos[1]] === player) {
//         return `${player} wins`;
//       }
//     }

//     if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
//       if (board[currentPos[0]][currentPos[1] + 1] === player && board[currentPos[0]][currentPos[1] + 2] === player && board[currentPos[0]][currentPos[1] + 3] === player) {
//         return `${player} wins`;
//       }
//     }
//     if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1] + 1] === player && board[currentPos[0] + 2][currentPos[1] + 2] === player && board[currentPos[0] + 3][currentPos[1] + 3] === player) {
//         return `${player} wins`;
//       }
//     }
//     if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
//       if (board[currentPos[0] + 1][currentPos[1] - 1] === player && board[currentPos[0] + 2][currentPos[1] - 2] === player && board[currentPos[0] + 3][currentPos[1] - 3] === player) {
//         return `${player} wins`;
//       }
//     }
//     currentPos = positions.shift();
//   }
}

// function findWinner(board, pos, char) {
//   let currentPos = pos.shift();
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