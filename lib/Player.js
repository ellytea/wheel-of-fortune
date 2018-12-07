class Player {
  constructor(name, totalScore) {
    this.name = name;
    this.roundScore = 0;
    this.totalScore = 0;
    this.turn = false;
  }

  //updateScore() {
    // this.roundScore++
    // domUpdates.updateScore(this.roundScore)
  //}
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}