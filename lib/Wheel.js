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