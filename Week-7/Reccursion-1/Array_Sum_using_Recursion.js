const arraySumRecursive = (arr) => {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: extract the first element and add it to the sum of the rest of the array
  const firstElement = arr[0];
  const remainingArray = arr.slice(1);
  return firstElement + arraySumRecursive(remainingArray);
};

// Test Case 1
const input1 = [1, 2, 3, 4, 5];
console.log("Test Case 1:");
console.log(arraySumRecursive(input1)); // Output: 15

// Test Case 2
const input2 = [0, 0, 0, 0, 0];
console.log("Test Case 2:");
console.log(arraySumRecursive(input2)); // Output: 0
