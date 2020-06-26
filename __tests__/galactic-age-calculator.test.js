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
    newAge.calculateMercury();
    expect(newAge.mercuryAge).toEqual(417);
    expect(newAge.mercuryYearsLeft).toEqual(-90);
    expect(newAge.yearsPastMercury).toEqual(90);
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