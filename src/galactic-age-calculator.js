export class Calculator {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.averageEarthLife = 78.54;
  }

  calculateEarth() {
    this.earthAge = Math.round(this.age);
    return this.earthAge;
  }

  calculateMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);
    return this.mercuryAge;
  }

  calculateVenus() {
    this.venusAge = Math.round(this.age / this.venus);
    return this.venusAge;
  }

  calculateMars() {
    this.marsAge = Math.round(this.age / this.mars);
    return this.marsAge;
  }

  calculateJupiter() {
    this.jupiterAge = Math.round(this.age / this.jupiter);
    return this.jupiterAge;
  }

  yearsLeft() {
    this.earthLife = Math.round(this.averageEarthLife - this.age);
    return this.earthLife;
  }

  mercuryYearsLeft() {
    this.mercuryLife = Math.round(this.yearsLeft() / this.mercury);
    return this.mercuryLife;
  }

  venusYearsLeft() {
     this.venusLife = Math.round(this.yearsLeft() / this.venus);
    return this.venusLife;
  }

  marsYearsLeft() {
    this.marsLife = Math.round(this.yearsLeft() / this.mars);
    return this.marsLife;
  }

  jupiterYearsLeft() {
    this.jupiterLife = Math.round(this.yearsLeft() / this.jupiter);
    return this.jupiterLife;
  }

  yearsSurpassed() {
    this.earthYearsPast = Math.round(this.age - this.averageEarthLife);
    this.mercuryYearsPast;
  }
}