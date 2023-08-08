const selectionSortStrings = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

// Test Case 1
const input1 = ["banana", "apple", "grape", "cherry"];
const sortedArray1 = selectionSortStrings(input1);
console.log(sortedArray1);
// Output: ['apple', 'banana', 'cherry', 'grape']

// Test Case 2
const input2 = ["cat", "dog", "elephant", "bear"];
const sortedArray2 = selectionSortStrings(input2);
console.log(sortedArray2);
// Output: ['bear', 'cat', 'dog', 'elephant']
