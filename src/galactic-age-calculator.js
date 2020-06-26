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
    this.earthYearsPast = Math.round(this.age - this.lifeExpectancy);
  }

// Calculates info for Mercury -----
  calculateMercury() {
    this.mercuryAge = Math.round(this.age / this.mercury);
    this.mercuryLife = Math.round(this.lifeExpectancy / this.mercury);
    this.mercuryYearsPast = Math.round(this.mercuryAge - this.mercuryLife);
  }

// Calculates info for Venus -----
  calculateVenus() {
    this.venusAge = Math.round(this.age / this.venus);
    this.venusLife = Math.round(this.lifeExpectancy / this.venus); 
    this.venusYearsPast = Math.round(this.venusAge - this.venusLife);
  }

// Calculates info for Mars -----
  calculateMars() {
    this.marsAge = Math.round(this.age / this.mars);
    this.marsLife = Math.round(this.lifeExpectancy / this.mars);
    this.marsYearsPast = Math.round(this.marsAge - this.marsLife);
  }

// Calculates info for Jupiter -----
  calculateJupiter() {
   this.jupiterAge = Math.round(this.age / this.jupiter);
   this.jupiterLife = Math.round(this.lifeExpectancy / this.jupiter);
   this.jupiterYearsPast = Math.round(this.jupiterAge - this.jupiterLife);
  }
}

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