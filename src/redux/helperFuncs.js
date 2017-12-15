function addDisk(state, col) {
    if (state.won !== false) return state
    let row = 5;
    while (state.board[row][col] !== null) {
        row--;
        if (row < 0) {
            state.changePlayer = false;
            return state;
        }
    }

    state.board[row][col] = state.player;
    state.changePlayer = true;
    state.plays++
    if (state.plays === 42) {
        state.won = 'It\'s a tie';
        state.player = null;
    }
    return state;

}

function checkWinner(state) {
    const board = state.board;
    const player = state.player;
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
                state.won = (player === 'x') ? 'Santa Wins' : 'The Grinch Wins';
                return state;
            }
        }

        if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
            if (board[currentPos[0]][currentPos[1] + 1] === player && board[currentPos[0]][currentPos[1] + 2] === player && board[currentPos[0]][currentPos[1] + 3] === player) {
                state.won = (player === 'x') ? 'Santa Wins' : 'The Grinch Wins';
                return state;
            }
        }
        if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] + 1] === player && board[currentPos[0] + 2][currentPos[1] + 2] === player && board[currentPos[0] + 3][currentPos[1] + 3] === player) {
                state.won = (player === 'x') ? 'Santa Wins' : 'The Grinch Wins';
                return state;
            }
        }
        if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] - 1] === player && board[currentPos[0] + 2][currentPos[1] - 2] === player && board[currentPos[0] + 3][currentPos[1] - 3] === player) {
                state.won = (player === 'x') ? 'Santa Wins' : 'The Grinch Wins';
                return state;
            }
        }
        currentPos = positions.shift();
    } 
        state.won = false;
        return state;
    
}

function changePlayer(player) {
    player = (player === 'x') ? 'o' : 'x';
    return player;
}

module.exports = {
    changePlayer, 
    checkWinner,
    addDisk
};