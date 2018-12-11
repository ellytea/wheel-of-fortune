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
  }

}

if (typeof module !== 'undefined') {
  module.exports = Player;
}