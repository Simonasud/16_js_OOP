"use strict";
console.log("StudentClass.js file was loaded");

class Student {
  // privati savybe, nepasiekiam is uz klase vidaus ribu
  #mathMarks;
  #name;
  constructor(argName, argMathMarks) {
    this.#name = argName;
    this.#mathMarks = argMathMarks;
  }

  get name() {
    return this.#name;
  }

  // getteris mathMarks
  get mathMarks() {
    return this.#mathMarks;
  }
  // setteris mathMarks
  set mathMarks(newMark) {
    // validacijos
    if (typeof newMark !== "number") return;
    this.#mathMarks = newMark;
  }
}

let st1 = new Student("James", 5);

console.log("st1.mathMarks ===", st1.mathMarks);
st1.mathMarks = null;
console.log("st1 ===", st1);

st1.name; // gauna studento varda
console.log("st1.name ===", st1.name);
