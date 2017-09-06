const {
  expect
} = require('chai');

const {checkWinner, changePlayer, addDisk} = require('../src/redux/helperFuncs');

describe('check winner', () => {
  it('is a function', () => {
    expect(checkWinner).to.be.a('function');
  });
  it('empty board returns false as winner', () => {
    const State = {
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
    expect(checkWinner(State).won).to.equal('o wins');
  });
});