const fourSum = (nums, target) => {
  const result = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for the second element
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          // Skip duplicates for the third and fourth elements
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

// Test Case 1
const input1 = [1, 0, -1, 0, -2, 2];
const target1 = 0;
console.log("Test Case 1:");
console.log(fourSum(input1, target1)); // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

// Test Case 2
const input2 = [2, 2, 2, 2, 2];
const target2 = 8;
console.log("Test Case 2:");
console.log(fourSum(input2, target2)); // Output: [[2, 2, 2, 2]]
