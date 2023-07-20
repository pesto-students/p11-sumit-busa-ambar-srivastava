const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else return false;
};

console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false

// Time Complexity is O(1)
// Space Complexity is O(1)
