const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
};

// Test Case 1
const input1 = "64 34 25 12 22 11 90";
const array1 = input1.split(" ").map(Number);
const sortedArray1 = bubbleSort(array1);
console.log(sortedArray1.join(" "));
// Output: 11 12 22 25 34 64 90

// Test Case 2
const input2 = "7 4 3 8 2 6 1 5";
const array2 = input2.split(" ").map(Number);
const sortedArray2 = bubbleSort(array2);
console.log(sortedArray2.join(" "));
// Output: 1 2 3 4 5 6 7 8
    