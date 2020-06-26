// class object that will contain methods -----
export class Calculator {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.lifeExpectancy = lifeExpectancy;
  }

// Calculates age on earth -----
  calculateEarth() {
    this.earthAge = Math.round(this.age);
    this.earthLife = Math.round(this.lifeExpectancy);
    this.earthYearsPast = Math.round(this.age - this.lifeExpectancy);
  }
}  

// // Calculates age on Mercury -----
//   calculateMercury() {
//     this.mercuryAge = Math.round(this.age / this.mercury);
//     return this.mercuryAge;
//   }

// // Calculates age on Venus -----
//   calculateVenus() {
//     this.venusAge = Math.round(this.age / this.venus);
//     return this.venusAge;
//   }

// // Calculates age on Mars -----
//   calculateMars() {
//     this.marsAge = Math.round(this.age / this.mars);
//     return this.marsAge;
//   }

// // Calculates age on Jupiter -----
//   calculateJupiter() {
//     this.jupiterAge = Math.round(this.age / this.jupiter);
//     return this.jupiterAge;
//   }

// // Calculates years left on Earth -----
//   yearsLeft() {
//     this.earthLife = Math.round(this.lifeExpectancy - this.age);
//     return this.earthLife;
//   }

// // Calculates years left on Mercury -----
//   mercuryYearsLeft() {
//     this.mercuryLife = Math.round(this.yearsLeft() / this.mercury);
//     return this.mercuryLife;
//   }

// // Calculates years left on Venus -----
//   venusYearsLeft() {
//     this.venusLife = Math.round(this.yearsLeft() / this.venus);
//     return this.venusLife;
//   }

// // Calculates years left on Mars -----  
//   marsYearsLeft() {
//     this.marsLife = Math.round(this.yearsLeft() / this.mars);
//     return this.marsLife;
//   }

// // Calculates years left on Jupiter -----  
//   jupiterYearsLeft() {
//     this.jupiterLife = Math.round(this.yearsLeft() / this.jupiter);
//     return this.jupiterLife;
//   }

// // Calculates years surpassed average on Earth -----  
//   yearsSurpassed() {
//     this.earthYearsPast = Math.round(this.age - this.lifeExpectancy);
//   }

// // Calculates years surpassed average on mercury -----   
//   yearsPastMercury() {
//     this.mercuryYearsPast = Math.round(this.mercuryAge - 327.25);
//     return this.mercuryYearsPast;
//   }
// }