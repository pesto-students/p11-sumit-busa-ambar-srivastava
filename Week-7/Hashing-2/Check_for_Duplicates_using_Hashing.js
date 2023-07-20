const checkForDuplicates = (arr) => {
  const hashTable = new Set();

  for (const num of arr) {
    if (hashTable.has(num)) {
      return "There are duplicate elements in the array.";
    }
    hashTable.add(num);
  }

  return "There are no duplicate elements in the array.";
};

// Test Case 1
const input1 = "1 2 3 4 5 1";
const arr1 = input1.split(" ").map(Number);
console.log("Test Case 1:");
console.log(checkForDuplicates(arr1)); // Output: There are duplicate elements in the array.

// Test Case 2
const input2 = "10 20 30 40 50";
const arr2 = input2.split(" ").map(Number);
console.log("Test Case 2:");
console.log(checkForDuplicates(arr2)); // Output: There are no duplicate elements in the array.
