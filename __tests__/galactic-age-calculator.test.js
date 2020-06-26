import { Calculator } from './../src/galactic-age-calculator.js';

describe('Calculator', () => {
  const newAge = new Calculator(26);

  test('should create calculator class/constructor', () => {
    expect(newAge.age).toBe(26);
  });

  test('should return a users age for Earth', () => {
    expect(newAge.earthAge()).toEqual(26); 
  })
});