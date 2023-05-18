class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return Math.pow(num, 2);
  }

  cube(num) {
    return Math.pow(num, 3);
  }

  power(num1, num2) {
    return Math.pow(num1, num2);
  }
}

const scientificCalculator = new ScientificCalculator();

console.log(scientificCalculator.add(2, 3)); // Output: 5
console.log(scientificCalculator.subtract(5, 2)); // Output: 3
console.log(scientificCalculator.multiply(2, 4)); // Output: 8
console.log(scientificCalculator.divide(10, 2)); // Output: 5
console.log(scientificCalculator.square(3)); // Output: 9
console.log(scientificCalculator.cube(2)); // Output: 8
console.log(scientificCalculator.power(2, 3)); // Output: 8

// Using the "call" method to invoke the "add" method of the Calculator class
const result1 = Calculator.prototype.add.call(scientificCalculator, 10, 5);
console.log(result1); // Output: 15

// Using the "apply" method to invoke the "subtract" method of the Calculator class
const result2 = Calculator.prototype.subtract.apply(
  scientificCalculator,
  [10, 5]
);
console.log(result2);

// Using the "bind" method to create a new method "multiplyByTwo"
// that multiplies a number by 2 and returns the result
const multiplyByTwo = function (num) {
  return num * 2;
}.bind(scientificCalculator);

const result3 = multiplyByTwo(5);
console.log(result3); // Output: 10

// Using the "bind" method to create a new method "powerOfThree"
// that raises a number to the power of 3 and returns the result
const powerOfThree = function (num) {
  return Math.pow(num, 3);
}.bind(scientificCalculator);

const result4 = powerOfThree(2);
console.log(result4); // Output: 8
