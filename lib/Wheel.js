class Wheel {
  constructor() {
  this.currentElement = null;
}
  getSpinResult() {
   let wheelArray = data.wheel;
   let randomElmt = Math.floor(Math.random() * wheelArray.length);
   let spinElement = wheelArray[randomElmt];
   console.log('lookhere', spinElement)
   this.currentElement = spinElement;
  }

  
}

class BonusWheel extends Wheel {
  constructor() {
    super()

  }
}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}