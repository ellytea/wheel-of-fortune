const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Player = require('../lib/Player.js');
global.Game = require('../lib/Game.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../lib/domUpdates.js');

describe('Player', function() {

  let player;
  let game;

  beforeEach(function() {
    player = new Player();
    game = new Game();

    chai.spy.on(global.domUpdates, ['displayNewGame',
     'displayNextRound','spin','displaySpinElement',
     'displayPuzzleBoxes', 'showLetters', 'instructPlayer',
     'displayScore', 'displayTotalScore', 'displayUserSolve',
     'showAnswer', 'wipePuzzle'], () => true);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates)
  });

  it('should change player to current player', function() {

    let currentPlayer = game.currentPlayer;
    player.changePlayerTurn(currentPlayer);

    expect(player.turn).to.equal(true);
  });

  it('should Reset players ccurrent scores to 0 and add total to total score', function() {

    let currentPlayer = game.currentPlayer;
    player.addTotalScore(currentPlayer);

    expect(player.score).to.equal(0);
    expect(player.totalScore).not.to.equal(0);
  });

  it('should check if currentplayer can buy a vowel', function() {

    let currentPlayer = game.currentPlayer;
    player.buyVowel();

    expect(player.score).to.toContain(100);
  });

  it('should remove 100 from score if player buys a vowel', function() {

    let currentPlayer = game.currentPlayer;
    player.checkVowel();

    expect(player.score).to.equal(true);
  });
});