import { Calculator } from './../src/galctic-age-calculator.js';

describe('Calculator', () => {

  test('should create calculator class/constructor', () => {
    const newAge = new Calculator(26);
    expect(newAge.age).toBe(26);
  });
});