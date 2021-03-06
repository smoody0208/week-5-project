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
    this.earthYearsPast = Math.abs(this.age - this.lifeExpectancy);  
    }
  
// Calculates info for Mercury -----
  calculateMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);
    this.mercuryLife = Math.round(this.lifeExpectancy / this.mercury);
    this.mercuryYearsPast = Math.abs(this.mercuryAge - this.mercuryLife);
  }

// Calculates info for Venus -----
  calculateVenus() {
    this.venusAge = Math.round(this.age / this.venus);
    this.venusLife = Math.round(this.lifeExpectancy / this.venus); 
    this.venusYearsPast = Math.abs(this.venusAge - this.venusLife);
  }

// Calculates info for Mars -----
  calculateMars() {
    this.marsAge = Math.round(this.age / this.mars);
    this.marsLife = Math.round(this.lifeExpectancy / this.mars);
    this.marsYearsPast = Math.abs(this.marsAge - this.marsLife);
  }

// Calculates info for Jupiter -----
  calculateJupiter() {
    this.jupiterAge = Math.round(this.age / this.jupiter);
    this.jupiterLife = Math.round(this.lifeExpectancy / this.jupiter);
    this.jupiterYearsPast = Math.abs(this.jupiterAge - this.jupiterLife);
  }
}