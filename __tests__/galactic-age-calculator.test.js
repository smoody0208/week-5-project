import { Calculator } from './../src/galactic-age-calculator.js';

describe('Calculator', () => {
  const newAge = new Calculator(100, 78.54);

  test('should return users age, life expectancy, and years surpassed average for Earth', () => {
    newAge.calculateEarth();
    expect(newAge.age).toEqual(100);
    expect(newAge.lifeExpectancy).toEqual(78.54);
    expect(newAge.earthYearsPast).toEqual(21);
  });

  test('should return user age, life expectancy, and years surpassed average for Mercury', () => {
    const newAge = new Calculator(100, 78.54);
    newAge.calculateMercury();
    newAge.calculateEarth();
    expect(newAge.mercuryAge).toEqual(417);
    expect(newAge.mercuryLife).toEqual(327);
    expect(newAge.mercuryYearsPast).toEqual(90);
  })

  test('should return user age, life expectancy, and years surpassed average for Venus', () => {
    const newAge = new Calculator(100, 78.54);
    newAge.calculateMercury();
    newAge.calculateEarth();
    newAge.calculateVenus();
    expect(newAge.venusAge).toEqual(161);
    expect(newAge.venusLife).toEqual(127);
    expect(newAge.venusYearsPast).toEqual(34);
  })

  test('should return user age, life expectancy, and years surpassed average for Mars', () => {
    const newAge = new Calculator(100, 78.54);
    newAge.calculateMercury();
    newAge.calculateEarth();
    newAge.calculateVenus();
    newAge.calculateMars();
    expect(newAge.marsAge).toEqual(53);
    expect(newAge.marsLife).toEqual(42);
    expect(newAge.marsYearsPast).toEqual(11);
  })
});


//   test('should return a users age for Earth', () => {
//     expect(newAge.calculateEarth()).toEqual(26); 
//   });

//   test('should return a users age for Mercury', () => {
//     expect(newAge.calculateMercury()).toEqual(108);
//   });

//   test('should return a users age for Venus', () => {
//     expect(newAge.calculateVenus()).toEqual(42);
//   });

//   test('should return a users age for Mars', () => {
//     expect(newAge.calculateMars()).toEqual(14);
//   });

//   test('should return a users age for Jupiter', () => {
//     expect(newAge.calculateJupiter()).toEqual(2);
//   });

//   test('should return a users amount of years left on earth for base', () => {
//     expect(newAge.yearsLeft()).toEqual(53);
//   });

//   test('should return a users amount of years left on Mercury', () => {
//     expect(newAge.mercuryYearsLeft()).toEqual(221);
//   });

//   test('should return a users amount of years left on Venus', () => {
//     expect(newAge.venusYearsLeft()).toEqual(85);
//   });

//   test('should return a users amount of years left on Mars', () => {
//     expect(newAge.marsYearsLeft()).toEqual(28);
//   });

//   test('should return a users amount of years left on Jupiter', () => {
//     expect(newAge.jupiterYearsLeft()).toEqual(4);
//   });

//   test('should return the amount of years the user has surpassed the average life expectancy', () => {
//     const newAge2 = new Calculator(100, 78.54);
//     newAge2.yearsSurpassed();
//     expect(newAge2.earthYearsPast).toEqual(21);
//     expect(newAge2.yearsPastMercury()).toEqual(90);
//   })
// });