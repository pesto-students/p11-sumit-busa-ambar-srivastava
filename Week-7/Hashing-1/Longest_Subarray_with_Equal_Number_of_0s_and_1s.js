const longestSubarrayWithEqualZerosAndOnes = (arr) => {
  const diffMap = new Map();
  let maxLen = 0;
  let diff = 0;

  for (let i = 0; i < arr.length; i++) {
    diff += arr[i] === 1 ? 1 : -1;

    if (diff === 0) {
      maxLen = i + 1;
    } else if (diffMap.has(diff)) {
      maxLen = Math.max(maxLen, i - diffMap.get(diff));
    } else {
      diffMap.set(diff, i);
    }
  }

  return maxLen;
};

// Test Case 1
const input1 = "0 1 0 1 1 0 0";
const arr1 = input1.split(" ").map(Number);
console.log("Test Case 1:");
console.log(longestSubarrayWithEqualZerosAndOnes(arr1)); // Output: 6

// Test Case 2
const input2 = "1 0 1 0 1 0 1";
const arr2 = input2.split(" ").map(Number);
console.log("Test Case 2:");
console.log(longestSubarrayWithEqualZerosAndOnes(arr2)); // Output: 6
