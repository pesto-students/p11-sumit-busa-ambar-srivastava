const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Test Case 1
const input1 = "64 34 25 12 22 11 90";
const array1 = input1.split(" ").map(Number);
const sortedArray1 = quickSort(array1);
console.log(sortedArray1.join(" "));
// Output: 90 64 34 25 22 12 11

// Test Case 2
const input2 = "5 10 15 20 25";
const array2 = input2.split(" ").map(Number);
const sortedArray2 = quickSort(array2);
console.log(sortedArray2.join(" "));
// Output: 25 20 15 10 5
