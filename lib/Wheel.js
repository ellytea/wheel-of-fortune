class Wheel {
  constructor() {
    
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