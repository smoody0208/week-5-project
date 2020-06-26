export class Calculator {
  constructor(age) {
    this.age = age;
  }

  earthAge() {
    let earthAge = Math.floor(this.age);
    return earthAge;
  }
}