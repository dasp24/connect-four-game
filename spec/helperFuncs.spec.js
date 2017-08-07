const {
  expect
} = require('chai');

const {checkWinnerTest} = require('./helpFuncsTest');

describe('check winner', () => {
  it('is a function', () => {
    expect(checkWinnerTest).to.be.a('function');
  });
  it('returns o as the winner', () => {
    const board = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 'o', null, null, null, null],
      [null, null, 'o', null, null, null, null],
      [null, 'x', 'o', 'x', null, null, null],
      [null, 'x', 'o', 'x', null, null, null]
    ];
    const board2 = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, 'x', null, null, null, null],
      [null, null, 'x', 'x', 'x', null, null],
      [null, null, 'o', 'o', 'o', 'o', null]
    ];
        const board3 = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, 'o', null],
      [null, null, null, null, 'o', null, null],
      [null, null, 'x', 'o', null, null, null],
      [null, null, 'o', 'x', 'x', null, null],
      [null, null, 'o', 'x', 'o', 'o', null]
    ];
    expect(checkWinnerTest(board)).to.equal('o wins');
    expect(checkWinnerTest(board2)).to.equal('o wins');
    expect(checkWinnerTest(board3)).to.equal('o wins');
  });
});