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

// const em1 = new Employee('James', 'Bond');
// console.log('em1 ===', em1);
const wor1 = new MyWorker("Mike", "Kurt", 10);
const wor2 = new MyWorker("James", "Bond", 15);
wor2.work(20);
wor1.hourlyPay = 20;
wor1.work(8);
wor1.work(8);
wor1.work(160);
wor1.calcPay();
console.log("wor1 ===", wor1);
