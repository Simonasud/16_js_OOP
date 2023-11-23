"use strict";
console.log("PersonClass.js file was loaded");

class Person {
  //spec funkcija kuri yra paleidziama kai sukuriamas objektas
  constructor(argName, argAge, argTown, argCar) {
    console.log("sukurtas objektas");
    this.name = argName;
    this.age = argAge;
    this.town = argTown;
    this.car = argCar;
    // this.info();
  }
  //kiti metodai
  info() {
    //sukurti info metodas kuris oskoncolintu "Mano vardas xx as is xx miesto"
    const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
    console.log(sakinys);
  }
  //metodas pakeisti miestui
  changeTown(newTown, argPassword) {
    const password = 123456;
    //validacijos
    if (!argPassword) {
      console.warn("iveskite slaptazodi");
      return;
    }
    if (password !== argPassword) {
      console.warn("neteisingas slaptazodis");
      return;
    }
    this.town = newTown;
    console.log(`${this.name} town was changed to ${newTown}`);
  }
}

const user3 = new Person("James", 25, "London", true);
user3.changeTown("Exeter", 123456);
// console.log("user3.town ===", user3.town);
// user3.test = "55";
const user4 = new Person("Mike", 35, "Vilnius", false);
const user5 = new Person("Jane", 33, "Kaunas", false);
user5.changeTown("Klaipeda");
console.log("user3  ===", user3);
console.log("user4 ===", user4);

// prideti prie Person klases savybe hasCar

const user1 = {
  name: "James",
  age: 25,
  town: "London",
  car: true,
};
// console.log("user1  ===", user1);
const user2 = {
  name: "Jane",
  age: 27,
  town: "Capetown",
  car: false,
};
