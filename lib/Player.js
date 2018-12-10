class Player {
  constructor(name, turn = false) {
    this.name = name;
    this.score = 0;
    this.totalScore = 0;
    this.turn = turn;
  }

  changePlayerTurn(player) {
    let currentIndex = game.players.indexOf(player);
    game.players[currentIndex].turn = false;
    if ((currentIndex + 1) >= this.players.length) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    game.players[currentIndex].turn = true;
  }

  //updateScore() {
    // this.roundScore++
    // domUpdates.updateScore(this.roundScore)
  //}
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}