console.log('Module.js!');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(`${this.name} ${this.age}`);
  }
}
