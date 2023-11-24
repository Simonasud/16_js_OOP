"use strict";
console.log("Freelancer.js file was loaded");

//sukurti clase
class Freelancer extends Employee {
  //prideti tuscia darbu masyva
  #jobs = [];
  //praplesti Employee
  constructor(fName, lName) {
    super(fName, lName);
  }
  assignJob(newJob) {
    //prideti argumentu gauta darba i darbu masyva
    //patikrinti ar NEWjOB YRA DARBO OBJEKTAS SUKURTAS PAGAL JOB KLASE
    if (!(newJob instanceof Job)) {
      console.warn("netikras darbas", newJob);
      return;
    }
    this.#jobs.push(newJob);
    console.log("this.#jobs ===", this.#jobs);
  }
}

//sukurti 2 freelancerius
