const maxProductOfSubarray = (arr) => {
  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    maxProduct = Math.max(arr[i], maxProduct * arr[i]);
    minProduct = Math.min(arr[i], minProduct * arr[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
};

console.log(maxProductOfSubarray([5, 2, 3, -2, 4, 5]));
console.log(maxProductOfSubarray([4, -1, -2, -3, -4]));
