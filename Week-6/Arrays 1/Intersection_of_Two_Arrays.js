const findIntersection = (arr1, arr2) => {
  const set = new Set(arr1);
  const intersection = [];

  for (const num of arr2) {
    if (set.has(num)) {
      intersection.push(num);
      set.delete(num);
    }
  }

  return intersection;
};

console.log(findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
console.log(findIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
