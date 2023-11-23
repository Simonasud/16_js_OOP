"use strict";
console.log("EmployeeClass.js file was loaded");

class Employee {
  firstName;
  lastName;

  constructor(argName, argSurname) {
    this.firstName = argName;
    this.lastName = argSurname;
  }
  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  //imituojam abstrakcia klase
  calcPay() {
    throw new Error("reikia aprasyti calcPay");
  }
}

//pasako is ko paveldi
class Worker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    //iskviesti tevines klases konstruktoriu
    super(name, lastName);
    this.hourlyPay = dollarPerHour;
  }
}

class TownWorker extends Worker {
  town;
  constructor(vardas, pavarde, valandinis, miestas) {
    //tevines klases konstruktorius
    super(vardas, pavarde, valandinis);
    this.town = miestas;
  }
}

// sukurti TownWorker clase
//ta klase praplecia Worker klase
//sukurdami nauja TownWorker papildomai pridesime miesta

const em1 = new Employee("James", "Bond");
const wor1 = new Worker("Mike", "Kurt", 10);
const tw1 = new TownWorker("Simona", "Sima", 10, "Silute");
console.log("em1 ===", em1);
em1.printFullName();
console.log("wor1 ===", wor1);
wor1.printFullName();
console.log("tw1 ===", tw1);
tw1.printFullName();
