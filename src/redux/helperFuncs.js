export function addDisk(state, col) {
  const newState = { ...state
  }
  if (newState.won !== false) return newState
  let row = 5;
  while (newState.board[row][col] !== null) {
    row--;
    if (row < 0) return newState;
  }

  newState.board[row][col] = state.player;

  return newState;

}

export function checkWinner(board, player) {
  const positions = [];
   board.forEach((line, index) => {
        line.forEach((item, jindex) => {
            if (item === player) positions.push([index, jindex]);
        });
    });

  let currentPos = positions.shift();
    while (positions.length >= 3) {
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
        }
        currentPos = positions.shift();
    }
      return false;
}

export function changePlayer(player, won) {
  if (won !== false) return player;
  player = (player === 'x') ? 'o':'x';
  return player;
}

