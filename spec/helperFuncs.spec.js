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
    expect(changePlayer('o')).to.equal('x');
    expect(changePlayer('x')).to.equal('o');
    expect(changePlayer(State.player)).to.equal('o');
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
    expect(changePlayer('o')).to.equal('x');
    expect(changePlayer('x')).to.equal('o');
    expect(changePlayer(State.player)).to.equal('o');
  });
  it('adds disks correctly', () => {
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
    
    const result1 = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['x', null, null, null, null, null, null]
    ];
    
    expect(addDisk(State,0).board).to.eql(result1);
    const State2 = {
      board: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ['x', 'o', 'x', 'o', 'x', null, null]
      ],
      player: 'o',
      won: false,
      changePlayer: true,
      plays: 0
    };
    const result2 = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ['o', null, null, null, null, null, null],
      ['x', 'o', 'x', 'o', 'x', null, null]
    ];
    expect(addDisk(State2,0).board).to.eql(result2);
  });
});