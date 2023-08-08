const heapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left].length > arr[largest].length) {
    largest = left;
  }

  if (right < n && arr[right].length > arr[largest].length) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

const heapSort = (arr) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
};

const input1 = "apple,banana,pear,orange,kiwi";
const array1 = input1.split(",");
heapSort(array1);
console.log(array1.join(" "));
// Output: banana orange apple pear kiwi

const input2 = "red,yellow,green,blue";
const array2 = input2.split(",");
heapSort(array2);
console.log(array2.join(" "));
// Output: yellow green blue red
