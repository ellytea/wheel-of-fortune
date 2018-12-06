class Round {
  constructor(currentRound = 1) {
    this.currentRound = currentRound;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Round;
}