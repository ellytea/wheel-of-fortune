// const Game = require('./Game');

class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.score = 0;
    this.totalScore = 0;
    this.turn = turn;
  }

  changePlayerTurn(currentPlayer) {
    let currentIndex = game.players.indexOf(currentPlayer);
    game.players[currentIndex].turn = false;
    if ((currentIndex + 1) >= game.players.length) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    game.players[currentIndex].turn = true;
    game.currentPlayer = game.players[currentIndex];
    setTimeout(() => {
      domUpdates.instructPlayer(game.currentPlayer.name);
    }, 2020);
    $('.vowels').attr('disabled', 'true');
  }

  addTotalScore(currentPlayer) {
    currentPlayer.totalScore += currentPlayer.score;
    game.players.forEach((player) => {
      player.score = 0;
    });
  }

  buyVowel() {
    if (game.currentPlayer.score >= 100) {
      $('.vowels').removeAttr('disabled');
    }
  }

  checkVowel(letter) {
    if (letter === 'A' || letter === 'E' || letter === 'O' || letter === 'U'|| letter === 'I') {
    game.currentPlayer.score -= 100;
    }
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}