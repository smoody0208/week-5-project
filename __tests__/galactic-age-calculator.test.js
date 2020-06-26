import { Calculator } from './../src/galactic-age-calculator.js';

describe('Calculator', () => {
  const newAge = new Calculator(26);

  test('should create calculator class/constructor', () => {
    expect(newAge.age).toBe(26);
  });

  test('should return a users age for Earth', () => {
    expect(newAge.calculateEarth()).toEqual(26); 
  });

  test('should return a users age for Mercury', () => {
    expect(newAge.calculateMercury()).toEqual(108);
  });

  test('should return a users age for Venus', () => {
    expect(newAge.calculateVenus()).toEqual(42);
  });

  test('should return a users age for Mars', () => {
    expect(newAge.calculateMars()).toEqual(14);
  });

  test('should return a users age for Jupiter', () => {
    expect(newAge.calculateJupiter()).toEqual(2);
  });

  test('should return a users amount of years left on earth for base', () => {
    expect(newAge.yearsLeft()).toEqual(53);
  });

  test('should return a users amount of years left on Mercury', () => {
    expect(newAge.mercuryYearsLeft()).toEqual(221);
  });

  test('should return a users amount of years left on Venus', () => {
    expect(newAge.venusYearsLeft()).toEqual(85);
  });

  test('should return a users amount of years left on Mars', () => {
    expect(newAge.marsYearsLeft()).toEqual(28);
  });

  test('should return a users amount of years left on Jupiter', () => {
    expect(newAge.jupiterYearsLeft()).toEqual(4);
  });

  test('should return the amount of years the user has surpassed the average life expectancy', () => {
    const newAge2 = new Calculator(80);
    newAge2.yearsSurpassed();
    expect(newAge2.earthYearsPast).toEqual(1);
  })
});