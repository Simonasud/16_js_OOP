"use strict";
console.log("Freelancer.js file was loaded");

// sukurti clase
class Freelancer extends Employee {
  #jobs = [];
  // praplesti Employee
  constructor(fName, lName) {
    super(fName, lName);
  }

  assingJob(newJob) {
    // prideti argumentu gauta darba i darbu masyva
    // patikrtinti ar newJob yra darbo objektas sukurtas pagal
    // Job klase
    if (!(newJob instanceof Job)) {
      console.warn("netikras darbas", newJob);
      return;
    }
    this.#jobs.push(newJob);
    // console.table(this.#jobs);
    // console.log(JSON.stringify(this.#jobs, null, 2));
  }

  completeAJob(jobId) {
    // ieskoti darbo su id 'jobId',
    const found = this.#jobs.find((jobObj) => jobObj.id === jobId);
    // console.log('found ===', found);
    // pranesti jei neradom tokio darbo
    if (found === undefined) {
      console.warn("toks darba nerastas", jobId);
      return;
    }
    // radus iskviesti jam finishJob() metoda
    // found.done = true;
    found.finishJob();
    console.log(`${this.firstName} atliko '${found.title}' darba`);
    // console.table(this.#jobs);
  }

  // apskaiciuoti atlyginima
  calcPay() {
    // atrinkti pabaigtus darbus
    const baigtiDarbai = this.#jobs.filter((jobObj) => jobObj.done === true);
    // console.table(baigtiDarbai);
    // sudeti ju suma

    let sum = 0;
    // TODO: pasidaryti su reduce
    baigtiDarbai.forEach((jobObj) => {
      sum += jobObj.amount;
    });
    // grazinti suma

    // palikti darbu masyve tik nepabaigtus darbus
    const nebaigtiDarbai = this.#jobs.filter((jobObj) => jobObj.done !== true);
    this.#jobs = nebaigtiDarbai;
    // console.log(`-- ${this.firstName} ismoketi ${sum.toFixed(2)}eur`);
    return sum;
  }
}
// prideti tuscia darbu masyva
// sukurti 2 freelancerius

let jobs = [
  {
    id: "job_2",
    title: "Headeris",
    amount: 300,
    done: false,
  },
  {
    id: "job_1",
    title: "Footeris",
    amount: 200,
    done: false,
  },
];
jobs = jobs.filter((jObj) => jObj.title === "Headeris");
