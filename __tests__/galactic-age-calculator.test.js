import { Calculator } from './../src/galactic-age-calculator.js';

describe('Calculator', () => {
  const newAge = new Calculator(100, 78.54);

  test('should return user age, life expectancy, and years surpassed average for Earth', () => {
    newAge.calculateEarth();
    expect(newAge.age).toEqual(100);
    expect(newAge.lifeExpectancy).toEqual(78.54);
    expect(newAge.earthYearsPast).toEqual(21);
  });

  test('should return user age, life expectancy, and years surpassed average for Mercury', () => {
    newAge.calculateMercury();
    expect(newAge.mercuryAge).toEqual(417);
    expect(newAge.mercuryLife).toEqual(327);
    expect(newAge.mercuryYearsPast).toEqual(90);
  })

  test('should return user age, life expectancy, and years surpassed average for Venus', () => {
    newAge.calculateVenus();
    expect(newAge.venusAge).toEqual(161);
    expect(newAge.venusLife).toEqual(127);
    expect(newAge.venusYearsPast).toEqual(34);
  })

  test('should return user age, life expectancy, and years surpassed average for Mars', () => {
    newAge.calculateMars();
    expect(newAge.marsAge).toEqual(53);
    expect(newAge.marsLife).toEqual(42);
    expect(newAge.marsYearsPast).toEqual(11);
  })

  test('should return user age, life expectancy, and years surpassed average for Jupiter', () => {
    newAge.calculateJupiter();
    expect(newAge.jupiterAge).toEqual(8);
    expect(newAge.jupiterLife).toEqual(7);
    expect(newAge.jupiterYearsPast).toEqual(1);
  })
});