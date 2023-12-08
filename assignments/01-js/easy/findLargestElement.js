/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return undefined;
  let Largetst = -1000000;
  for (let i = 0; i < numbers.length; i++) {
    Largetst = Math.max(Largetst, numbers[i]);
  }
  return Largetst;
}

module.exports = findLargestElement;
