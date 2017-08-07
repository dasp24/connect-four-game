export function addDisk(state, col) {
    const newState = { ...state
    }
    if (newState.won !== false) return newState
    let row = 5;
    while (newState.board[row][col] !== null) {
        row--;
        if (row < 0) {
            newState.changePlayer = false;
            return newState;
        }
    }

    newState.board[row][col] = state.player;
    newState.changePlayer = true;
    newState.plays++
    if (newState.plays === 42) {
        newState.won = 'It\'s a tie';
        newState.player = null;
    }
    return newState;

}

export function checkWinner(state) {
    const newState = { ...state
    }
    const board = newState.board
    const player = newState.player
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
                newState.won = (player === 'x') ? 'Red Wins' : 'Yellow Wins';
                return newState
            }
        }

        if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
            if (board[currentPos[0]][currentPos[1] + 1] === player && board[currentPos[0]][currentPos[1] + 2] === player && board[currentPos[0]][currentPos[1] + 3] === player) {
                newState.won = (player === 'x') ? 'Red Wins' : 'Yellow Wins';
                return newState
            }
        }
        if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] + 1] === player && board[currentPos[0] + 2][currentPos[1] + 2] === player && board[currentPos[0] + 3][currentPos[1] + 3] === player) {
                newState.won = (player === 'x') ? 'Red Wins' : 'Yellow Wins';
                return newState
            }
        }
        if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] - 1] === player && board[currentPos[0] + 2][currentPos[1] - 2] === player && board[currentPos[0] + 3][currentPos[1] - 3] === player) {
                newState.won = (player === 'x') ? 'Red Wins' : 'Yellow Wins';
                return newState
            }
        }
        currentPos = positions.shift();
    } 
        newState.won = false;
        return newState
    
}

export function changePlayer(player) {
    player = (player === 'x') ? 'o' : 'x';
    return player;
}