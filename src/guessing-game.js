class GuessingGame {
    constructor() {
      this.minValue = null;
      this.maxValue = null;
    }
  
    setRange(minValue, maxValue) {
      this.minValue = minValue;
      this.maxValue = maxValue;
    }
  
    guess() {
      return Math.ceil((this.minValue + this.maxValue) / 2);
    }
  
    lower() {
      this.maxValue = this.guess();
    }
  
    greater() {
      this.minValue = this.guess();
    }
  }
  

module.exports = GuessingGame;
