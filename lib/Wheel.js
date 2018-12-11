class Wheel {
  constructor() {
  this.currentElement = null;
  this.randomArray = [];
}
  
  generateSixElements() {
    const wheelArr = data.wheel;
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * wheelArr.length);
      this.randomArray.push(random);
    }
    game.currentWheel.getSpinResult(wheelArr);
  }

  getSpinResult(wheelArr) {
    let sixArray = this.randomArray;
    let randomElmt = Math.floor(Math.random() * sixArray.length);
    let spinElement = wheelArr[sixArray[randomElmt]];
   this.currentElement = spinElement;
  }

  checkSpinElement() {
    if (this.currentElement === 'BANKRUPT') {
      game.currentPlayer.score = 0;
      domUpdates.displayScore(game.currentPlayer.score);
      game.currentPlayer.changePlayerTurn(game.currentPlayer);
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