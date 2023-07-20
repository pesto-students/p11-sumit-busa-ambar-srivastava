const expandFromCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};

const longestPalindromicSubstring = (s) => {
  if (!s || s.length === 0) {
    return "";
  }

  let start = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandFromCenter(s, i, i); // Odd-length palindrome
    const len2 = expandFromCenter(s, i, i + 1); // Even-length palindrome

    const len = Math.max(len1, len2);

    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
};

// Test Case 1
const input1 = "babad";
console.log("Test Case 1:");
console.log(longestPalindromicSubstring(input1)); // Output: "bab"

// Test Case 2
const input2 = "cbbd";
console.log("Test Case 2:");
console.log(longestPalindromicSubstring(input2)); // Output: "bb"
