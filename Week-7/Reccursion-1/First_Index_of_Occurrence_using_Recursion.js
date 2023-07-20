const firstIndexOfOccurrence = (arr, target, index = 0) => {
  // Base case: if the current index is equal to the array length, return -1
  if (index === arr.length) {
    return -1;
  }

  // If the current element is equal to the target value, return the current index
  if (arr[index] === target) {
    return index;
  }

  // Recursive case: make a recursive call on the remaining subarray, starting from the next index
  return firstIndexOfOccurrence(arr, target, index + 1);
};

// Test Case 1
const input1 = [1, 2, 3, 4, 5, 5];
const target1 = 5;
console.log("Test Case 1:");
console.log(firstIndexOfOccurrence(input1, target1)); // Output: 4

// Test Case 2
const input2 = [2, 4, 6, 8, 10, 5];
const target2 = 12;
console.log("Test Case 2:");
console.log(firstIndexOfOccurrence(input2, target2)); // Output: -1
