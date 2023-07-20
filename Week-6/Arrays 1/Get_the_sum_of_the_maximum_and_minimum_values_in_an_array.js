const getSumOfMaxAndMin = (arr) => {
  const numbers = arr.split(" ").map(Number);

  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }
  return min + max;
};

console.log(getSumOfMaxAndMin("5 2 9 1 7"));
console.log(getSumOfMaxAndMin("-10 0 100 -50 20"));
