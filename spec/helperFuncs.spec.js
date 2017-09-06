const {
  expect
} = require('chai');

const {checkWinner, changePlayer, addDisk} = require('../src/redux/helperFuncs');

describe('connect-4 game', () => {
  it('has functions - checkWinner, changePlayer and addDisk', () => {
    expect(checkWinner).to.be.a('function');
    expect(changePlayer).to.be.a('function');
    expect(addDisk).to.be.a('function');
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
    expect(checkWinner(State).won).to.equal(false);
    expect(checkWinner(State)).to.equal(State);
  });
  it('changes player correctly', () => {
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
    expect(changePlayer(State.player)).to.equal('o');
  });
});