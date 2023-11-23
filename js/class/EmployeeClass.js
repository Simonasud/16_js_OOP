"use strict";
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
console.log("EmployeeClass.js file was loaded");
