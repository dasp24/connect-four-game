function checkWinnerTest(board) {
  const xPositions = findChar(board, 'x');
    const oPositions = findChar(board, 'o');
    let result = false;
    const xWins = findWinner(board, xPositions, 'x');
    const oWins = findWinner(board, oPositions, 'o');
    if (oWins === 'o wins') result = oWins;
    if (xWins === 'x wins') result = xWins;
    return result;
}

function findChar(board, char) {
    const result = [];
    board.forEach((line, index) => {
        line.forEach((item, jindex) => {
            if (item === char) result.push([index, jindex]);
        });
    });
    return result;
}

function findWinner(board, pos, char) {
    let currentPos = pos.shift();
    while (pos.length >= 3) {
        if (board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1]] === char && board[currentPos[0] + 2][currentPos[1]] === char && board[currentPos[0] + 3][currentPos[1]] === char) {
                return `${char} wins`;
            }
        }

        if (board[currentPos[0]][currentPos[1] + 3] !== undefined) {
            if (board[currentPos[0]][currentPos[1] + 1] === char && board[currentPos[0]][currentPos[1] + 2] === char && board[currentPos[0]][currentPos[1] + 3] === char) {
                return `${char} wins`;
            }
        }
        if (board[currentPos[0]][currentPos[1] + 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] + 1] === char && board[currentPos[0] + 2][currentPos[1] + 2] === char && board[currentPos[0] + 3][currentPos[1] + 3] === char) {
                return `${char} wins`;
            }
        }
        if (board[currentPos[0]][currentPos[1] - 3] !== undefined && board[currentPos[0] + 3] !== undefined) {
            if (board[currentPos[0] + 1][currentPos[1] - 1] === char && board[currentPos[0] + 2][currentPos[1] - 2] === char && board[currentPos[0] + 3][currentPos[1] - 3] === char) {
                return `${char} wins`;
            }
        }
        currentPos = pos.shift();
    }
}

module.exports = {
    checkWinnerTest
};