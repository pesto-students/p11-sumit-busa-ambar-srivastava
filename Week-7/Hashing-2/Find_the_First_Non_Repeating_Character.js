const findFirstNonRepeatingCharacter = (str) => {
  const charFrequency = {};

  // Count the frequency of each character in the string
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  return "No non-repeating characters found";
};

// Test Case 1
const input1 = "abcdabcde";
console.log("Test Case 1:");
console.log(findFirstNonRepeatingCharacter(input1)); // Output: d

// Test Case 2
const input2 = "aabbccd";
console.log("Test Case 2:");
console.log(findFirstNonRepeatingCharacter(input2)); // Output: No non-repeating characters found
