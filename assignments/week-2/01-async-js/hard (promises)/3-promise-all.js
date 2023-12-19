/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function wait2(t) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function wait3(t) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return promise;
}

function calculateTime(t1, t2, t3) {
  const initialDate = new Date().getTime();
  const w1 = wait1(t1);
  const w2 = wait2(t2);
  const w3 = wait3(t3);
  return Promise.all([w1, w2, w3]).then(() => {
    const finalDate = new Date().getTime();
    return finalDate - initialDate;
  });
}

module.exports = calculateTime;
