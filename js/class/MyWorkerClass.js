"use strict";

//pasako is ko paveldi
class MyWorker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    //iskviesti tevines klases konstruktoriu
    super(name, lastName);
    this.hourlyPay = dollarPerHour;
  }
}

console.log("WorkerClass.js file was loaded");
