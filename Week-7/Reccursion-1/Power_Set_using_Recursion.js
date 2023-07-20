const generatePowerSet = (nums) => {
  nums = nums.split(" ").map(Number); // Convert input string to an array of integers
  const powerSet = [[]]; // Initialize with an empty set

  const backtrack = (start, subset) => {
    if (start === nums.length) {
      return;
    }

    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]);
      powerSet.push([...subset]);
      backtrack(i + 1, subset);
      subset.pop();
    }
  };

  backtrack(0, []);
  return powerSet;
};

// Test Case 1
const input1 = "1 2 3";
console.log(generatePowerSet(input1)); // Output: [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

// Test Case 2
const input2 = "4 7 1 9";
console.log(generatePowerSet(input2)); // Output: [ [], [ 4 ], [ 4, 7 ], [ 4, 7, 1 ], [ 4, 7, 1, 9 ], [ 4, 7, 9 ], [ 4, 1 ], [ 4, 1, 9 ], [ 4, 9 ], [ 7 ], [ 7, 1 ], [ 7, 1, 9 ], [ 7, 9 ], [ 1 ], [ 1, 9 ], [ 9 ] ]
