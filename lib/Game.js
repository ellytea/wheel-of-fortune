class Game {
  constructor(player1, player2, player3, round = 1) {
    this.players = [];
    this.currentRound = round;
  }


}

if (typeof module !== 'undefined') {
  module.exports = Game;
}