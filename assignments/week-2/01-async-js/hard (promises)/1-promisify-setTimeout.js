/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const newPromise = new Promise((resolves, reject) => {
    setTimeout(() => {
      resolves();
    }, n * 1000);
  });
  return newPromise;
}

module.exports = wait;
