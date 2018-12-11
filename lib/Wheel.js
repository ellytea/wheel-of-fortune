class Wheel {
  constructor() {
  this.currentElement = null;
}

  // access wheel array

  getSpinResult() {
   let wheelArray = data.wheel;
   let randomElmt = Math.floor(Math.random() * wheelArray.length);
   let spinElement = wheelArray[randomElmt];
   this.currentElement = spinElement;
  }

  checkSpinElement() {
    if (this.currentElement === 'BANKRUPT') {
      game.currentPlayer.score = 0;
      domUpdates.displayScore(game.currentPlayer.score);
      game.currentPlayer.changePlayerTurn(game.currentPlayer);
      console.log('bank', this.players)
    } else if (this.currentElement === 'LOSE A TURN') {
      game.currentPlayer.changePlayerTurn(game.currentPlayer);
    }
  }
  
}


class BonusWheel extends Wheel {
  constructor(round) {
    super()
    this.bonusWheel = [];

  }

}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}