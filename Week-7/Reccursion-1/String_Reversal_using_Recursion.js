const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  }

  const firstChar = str[0];
  const remainingString = str.slice(1);
  const reversedRemaining = reverseString(remainingString);

  return reversedRemaining + firstChar;
};

// Test Case 1
const input1 = "hello";
console.log(reverseString(input1)); // Output: olleh

// Test Case 2
const input2 = "racecar";
console.log(reverseString(input2)); // Output: racecar
