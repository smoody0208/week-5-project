export class Calculator {
  constructor(age) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }

  calculateEarth() {
    let earthAge = Math.round(this.age);
    return earthAge;
  }

  calculateMercury() {
    let mercuryAge = Math.round(this.age / this.mercury);
    return mercuryAge;
  }

  calculateVenus() {
    let venusAge = Math.round(this.age / this.venus);
    return venusAge;
  }

  calculateMars() {
    let marsAge = Math.round(this.age / this.mars);
    return marsAge;
  }

  calculateJupiter() {
    let jupiterAge = Math.round(this.age / this.jupiter);
    return jupiterAge;
  }
}