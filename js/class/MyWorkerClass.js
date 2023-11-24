"use strict";

class MyWorker extends Employee {
  #hoursWorked = 0;
  #hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    // iskviesti tevines klases konstukroriu
    super(name, lastName);
    this.#hourlyPay = dollarPerHour;
  }

  // metoda work(howMany)
  work(howMany) {
    console.log(`-- ${this.firstName} worked for ${howMany} hours`);
    this.#hoursWorked += howMany;
  }

  // metoda calPay
  calcPay() {
    console.log("skaiciuojam alga");
    //paskaiciuoti kiek gaunasi isdirbtas val padauginus is valandinio
    const alga = this.#hoursWorked * this.#hourlyPay;
    console.log(`-- ${this.firstName} ismketi ${alga.toFixed(2)} eur`);
    //nunulinti valandas
    this.#hoursWorked = 0;
    return alga;
  }
}

console.log("WorkerClass was loaded");
