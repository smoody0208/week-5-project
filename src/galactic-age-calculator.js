// class object that will contain methods -----
export class Calculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

// Calculates info for Earth -----
  calculateEarth() {
    this.earthAge = Math.round(this.age);
    this.earthLife = Math.round(this.lifeExpectancy);
    if(this.earthAge > this.earthLife) {
    this.earthYearsPast = Math.round(this.age - this.lifeExpectancy);
    } 
  }

// Calculates info for Mercury -----
  calculateMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);
    this.mercuryLife = Math.round(this.lifeExpectancy / this.mercury);
    if(this.mercuryAge > this.mercuryLife) {
    this.mercuryYearsPast = Math.round(this.mercuryAge - this.mercuryLife);
    }
  }

// Calculates info for Venus -----
  calculateVenus() {
    this.venusAge = Math.round(this.age / this.venus);
    this.venusLife = Math.round(this.lifeExpectancy / this.venus); 
    if(this.venusAge > this.venusLife) {
    this.venusYearsPast = Math.round(this.venusAge - this.venusLife);
    }
  }

// Calculates info for Mars -----
  calculateMars() {
    this.marsAge = Math.round(this.age / this.mars);
    this.marsLife = Math.round(this.lifeExpectancy / this.mars);
    if(this.marsAge > this.marsLife) {
    this.marsYearsPast = Math.round(this.marsAge - this.marsLife);
    }
  }

// Calculates info for Jupiter -----
  calculateJupiter() {
    this.jupiterAge = Math.round(this.age / this.jupiter);
    this.jupiterLife = Math.round(this.lifeExpectancy / this.jupiter);
    if(this.jupiterAge > this.jupiterLife) {
    this.jupiterYearsPast = Math.round(this.jupiterAge - this.jupiterLife);
    }
  }
}