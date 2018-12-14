const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Game = require('../lib/Game.js');
const Player = require('../lib/Player.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../lib/domUpdates.js');

describe('Game', function() {

  let game;
  let currentPlayer;

  beforeEach(function() {
    game = new Game();
    currentPlayer = new Player();

    chai.spy.on(global.domUpdates, ['displayNewGame',
     'displayNextRound','spin','displaySpinElement',
     'displayPuzzleBoxes', 'showLetters', 'instructPlayer',
     'displayScore', 'displayTotalScore', 'displayUserSolve',
     'showAnswer', 'wipePuzzle'], () => true);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates)
  });

  it('should create a game with 7 keys', function() {
      expect(game).to.have.all.keys('players', 'currentPlayer', 'currentRound', 'puzzle', 'currentPuzzle', 'currentWheel', 'winner');
    });


  it('should instantiate 3 players with names', function() {
    game.createPlayers('playerOne', 'playerTwo', 'playerThree');
    
    expect(game.players).to.have.lengthOf(3);
  });


  it('should return puzzle category', function() {
    game.getCategory();

    expect(game.currentPuzzle.category).to.be.a('string');
  });

  it('should check answer', function() {

  });

  it('should assign game winner and current player to player object', function() {
    game.chooseWinner();

    expect(game.winner).to.be.an('undefined');
    expect(game.currentPlayer).to.be.an('undefined');
  });

  it('should increment current round', function() {
    game.nextRound();

    expect(game.currentRound).to.equal(2);
    expect(domUpdates.wipePuzzle).to.have.been.called(1);
    expect(domUpdates.displayNextRound).to.have.been.called(1);
  });

  it('should add puzzle to current puzzle', function() {
    game.bonusRound();

    expect(game.currentPuzzle).to.be.an('object');
    expect(domUpdates.wipePuzzle).to.have.been.called(1);
    expect(domUpdates.displayBonusRound).to.have.been.called(1);
  });



});