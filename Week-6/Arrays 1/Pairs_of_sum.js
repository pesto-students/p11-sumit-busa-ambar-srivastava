const findPairsOfSum = (arr, target) => {
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

console.log(findPairsOfSum([2, 4, 6, 8, 10], 12));
console.log(findPairsOfSum([1, 1, 1, 1, 1], 2));
