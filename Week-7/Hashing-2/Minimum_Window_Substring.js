const minWindowSubstring = (str1, str2) => {
  const targetCount = new Map();
  for (const char of str2) {
    targetCount.set(char, (targetCount.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let requiredCount = str2.length;
  let minWindow = "";
  let minLength = Infinity;

  while (right < str1.length) {
    const charRight = str1[right];
    if (targetCount.has(charRight)) {
      if (targetCount.get(charRight) > 0) {
        requiredCount--;
      }
      targetCount.set(charRight, targetCount.get(charRight) - 1);
    }

    while (requiredCount === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minWindow = str1.slice(left, right + 1);
      }

      const charLeft = str1[left];
      if (targetCount.has(charLeft)) {
        targetCount.set(charLeft, targetCount.get(charLeft) + 1);
        if (targetCount.get(charLeft) > 0) {
          requiredCount++;
        }
      }
      left++;
    }

    right++;
  }

  return minWindow;
};

// Test Case 1
const input1 = "ADOBECODEBANC";
const input2 = "ABC";
console.log("Test Case 1:");
console.log(minWindowSubstring(input1, input2)); // Output: "BANC"

// Test Case 2
const input3 = "aaabbbcdd";
const input4 = "abc";
console.log("Test Case 2:");
console.log(minWindowSubstring(input3, input4)); // Output: "abbbc"
