export class Calculator {
  constructor(age) {
    this.age = age;
  }

  calculateEarth() {
    let earthAge = Math.floor(this.age);
    return earthAge;
  }

  calculateMercury() {
    let mercury = 0.24;
    let mercuryAge = Math.floor(this.age / mercury);
    return mercuryAge;
  }
}