const replaceKeys = (arr, oldKey, newKey) => {
  return arr.map((num) => (num === oldKey ? newKey : null));
};

console.log(replaceKeys([1, 2, 3, 2, 4, 2, 5], 2, 6));
console.log(replaceKeys([5, 5, 5, 5], 5, 2));
