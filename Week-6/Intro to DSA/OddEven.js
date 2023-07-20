const checkOddOrEven = (num) => {
  if (num % 2 === 0) return "Even";
  else return "Odd";
};

console.log(checkOddOrEven(5)); // Output: Odd
console.log(checkOddOrEven(6)); // Output: Even

//Time Complexity is O(1)
//Space Complexity is O(1)
