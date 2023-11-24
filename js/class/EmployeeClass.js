"use strict";

class Employee {
  firstName;
  lastName;
  constructor(argName, argSurname) {
    this.firstName = argName;
    this.lastName = argSurname;
  }

  printFullName() {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    console.log(prisistatymas);
    return prisistatymas;
  }

  // imituojam abstakcia klase
  calcPay() {
    throw new Error("reikia aprasyti calcPay");
  }
}
console.log("EmployeeClass was loaded");
