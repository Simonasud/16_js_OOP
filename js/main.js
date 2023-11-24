"use strict";
console.log("main.js file was loaded");

// taikomes
const formEl = document.forms[0];
const nameEl = document.getElementById("name");
const lastNameEl = document.getElementById("lastName");
const hourlyPayEl = document.getElementById("hourlyPay");

const mainEmployeeArr = [];

// event listener
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("pateikta");
  const name = nameEl.value.trim();
  const lastName = lastNameEl.value.trim();
  const hourlyPay = hourlyPayEl.value.trim();
  const newWorker = new MyWorker(name, lastName, hourlyPay);
  console.log("newWorker ===", newWorker);
  mainEmployeeArr.push(newWorker);
  console.log("mainEmployeeArr ===", mainEmployeeArr);
});

const darbuotojai = [
  new MyWorker("James", "Bond", 10),
  new MyWorker("Jane", "Dow", 15),
  new MyWorker("Mike", "Tyson", 25),
  new Freelancer("Serbentautas", "Bordiuras"),
  new Freelancer("Mark", "brown"),
  new Freelancer("Ana", "Marie"),
];
console.log("darbuotojai ===", darbuotojai);
//darbuotojai dirba darbo laika
darbuotojai[0].work(800);
darbuotojai[1].work(100);
darbuotojai[2].work(160);

//sukuriami darbai freelanceriams
const jobsArr = [
  new Job("Footeris", 200),
  new Job("Headeris", 300),
  new Job("Aside", 400),
  new Job("Main", 500),
  new Job("Email", 100),
  new Job("Form", 140),
];

//freelanceriam priskiriami darbai
darbuotojai[3].assignJob(jobsArr[0]);
darbuotojai[3].assignJob(jobsArr[1]);
darbuotojai[3].assignJob(jobsArr[2]);
darbuotojai[4].assignJob(jobsArr[3]);
darbuotojai[4].assignJob(jobsArr[4]);

// freelanceriai atlieka darbus
darbuotojai[3].completeAJob(jobsArr[2].id);
darbuotojai[4].completeAJob(jobsArr[3].id);
darbuotojai[4].completeAJob(jobsArr[4].id);
// console.log("darbuotojai[3] ===", darbuotojai[3]);
// console.log("darbuotojai[4] ===", darbuotojai[4]);

//norim atspauzdinti su konsole
//'James Bond ismoketi 100 eur.

//sukti cikla per darbuotojus
// su printFullName gaunam varda ir pavarde
//su calcPay gaunam alga
console.log("-------------");
// darbuotojai.forEach((emplObj) => {
//   emplObj.printFullName();
//   let alga = emplObj.calcPay();
//   console.log("alga ====", alga);
// });
const algalapiai = darbuotojai.map((emplObj) => {
  return {
    name: emplObj.printFullName(),
    pay: emplObj.calcPay(),
  };
});

// { name: 'james Band', pay: 400}
