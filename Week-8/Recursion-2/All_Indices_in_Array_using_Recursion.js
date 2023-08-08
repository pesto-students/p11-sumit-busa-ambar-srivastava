const allIndices = (arr, target, index = 0) => {
  if (index === arr.length) {
    return [];
  }

  const result = allIndices(arr, target, index + 1);
  if (arr[index] === target) {
    result.unshift(index);
  }

  return result;
};

// Test Case 1
const input1 = [1, 2, 3, 2, 4, 2, 5];
const target1 = 2;
console.log(allIndices(input1, target1)); // Output: [1, 3, 5]

// Test Case 2
const input2 = [1, 1, 1, 1, 1];
const target2 = 1;
console.log(allIndices(input2, target2)); // Output: [0, 1, 2, 3, 4]
