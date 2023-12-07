/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  isValidNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  add(num) {
    if (!this.isValidNumber(num)) {
      throw new Error("Invalid input for addition");
    }
    this.result += num;
  }

  subtract(num) {
    if (!this.isValidNumber(num)) {
      throw new Error("Invalid input for subtraction");
    }
    this.result -= num;
  }

  multiply(num) {
    if (!this.isValidNumber(num)) {
      throw new Error("Invalid input for multiplication");
    }
    this.result *= num;
  }

  divide(num) {
    if (!this.isValidNumber(num)) {
      throw new Error("Invalid input for division");
    }
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    // Validate the expression for non-numerical characters
    if (!/^\s*(\(*\s*\d+(\.\d+)?[\+\-\*\/\(\)\s]*)+$/.test(str)) {
      throw new Error(
        "Invalid expression, please provide a valid arithmetic expression."
      );
    }

    // Replace multiple spaces with single space
    const cleanExpression = str.replace(/\s+/g, " ");
    try {
      const evalResult = eval(cleanExpression);
      if (!isFinite(evalResult)) {
        throw new Error("Divide by zero error");
      }
      this.result = evalResult;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Calculator;
