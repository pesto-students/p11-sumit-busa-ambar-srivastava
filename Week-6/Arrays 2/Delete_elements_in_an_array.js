const deleteElementsDivisibleBy2and3 = (arr) => {
  return arr.filter((num) => num % 2 !== 0 && num % 3 !== 0);
};

console.log(deleteElementsDivisibleBy2and3([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(deleteElementsDivisibleBy2and3([9, 12, 15, 18, 21]));
