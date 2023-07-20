const longestConsecutiveSubsequence = (arr) => {
  const numsSet = new Set(arr);
  let maxLength = 0;

  for (const num of arr) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      let currentNum = num + 1;

      while (numsSet.has(currentNum)) {
        length++;
        currentNum++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};

// Test Case 1
const input1 = "100 4 200 1 3 2";
const arr1 = input1.split(" ").map(Number);

console.log("Test Case 1:");
console.log(longestConsecutiveSubsequence(arr1)); // Output: 4

// Test Case 2
const input2 = "10 5 7 3 4 8 9";
const arr2 = input2.split(" ").map(Number);

console.log("Test Case 2:");
console.log(longestConsecutiveSubsequence(arr2)); // Output: 5
