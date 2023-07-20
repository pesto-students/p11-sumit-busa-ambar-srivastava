const printPermutations = (str) => {
  const n = str.length;
  const arr = str.split("");
  const result = [];

  const swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const backtrack = (start) => {
    if (start === n - 1) {
      result.push(arr.join(""));
      return;
    }

    for (let i = start; i < n; i++) {
      swap(start, i);
      backtrack(start + 1);
      swap(start, i);
    }
  };

  backtrack(0);

  return result;
};

// Test Case 1
const input1 = "abc";
console.log(printPermutations(input1).join(" ")); // Output: abc acb bac bca cab cba

// Test Case 2
const input2 = "ab";
console.log(printPermutations(input2).join(" ")); // Output: ab ba
