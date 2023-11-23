"use strict";
console.log("PersonClass.js file was loaded");

class Person {
  //spec funkcija kuri yra paleidziama kai sukuriamas objektas
  constructor(argName, argAge, argTown) {
    console.log("sukurtas objektas");
    this.name = argName;
    this.age = argAge;
    this.town = argTown;
  }
}

const user3 = new Person("James", 25, "London");
const user4 = new Person("Mike", 35);
console.log("user3  ===", user3);
console.log("user4 ===", user4);
const user1 = {
  name: "James",
  age: 25,
  town: "London",
};
console.log("user1  ===", user1);
const user2 = {
  name: "Jane",
  age: 27,
  town: "Capetown",
};
