"use strict";
console.log("StudentClass.js file was loaded");

class Student {
  //privati savybe, nepasiekiama is uz klases vidaus ribu
  #mathMarks;
  #name;
  constructor(argName, argMathMarks) {
    this.#name = argName;
    this.#mathMarks = argMathMarks;
  }
  get name() {
    return this.#name;
  }

  //getteris mathMarks - leidzia perskaityti (getteris)
  get mathMarks() {
    return this.#mathMarks;
  }
  //setteris mathMarks - leidzia pakeisti
  set mathMarks(newMark) {
    //validacijos
    if (typeof newMark !== "number") return;
    this.#mathMarks = newMark;
  }
}
const st1 = new Student("James", 5);
console.log("st1.mathMarks ===", st1.mathMarks);
st1.mathMarks = 8;
console.log("st1 ===", st1);
console.log("st1.name ===", st1.name);
