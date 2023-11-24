"use strict";
console.log("Job.js file was loaded");

class Job {
  //pridedama prie pacios klases o ne prie individualaus objekto
  static count = 0;
  id;
  title;
  amount;
  #done;
  constructor(jobTitle, jobAmount) {
    Job.count++;
    this.id = `job_${Job.count}`;
    this.title = jobTitle;
    this.amount = jobAmount;
    this.#done = false;
  }

  //kai norim uzbaigti darba
  finishJob() {
    this.#done = true;
  }
}

// const jobsArr = [new Job("Footeris", 200), new Job("Headeris", 200)];
// console.log("jobsArr ===", jobsArr);

// console.log("Job.count ===", Job.count);
