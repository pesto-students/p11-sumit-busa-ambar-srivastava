const findNonDuplicate = (arr) => {
  const frequency = {};

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (const num of arr) {
    if (frequency[num] === 1) {
      return num;
    }
  }
};

const input = "5 2 3 2 5";

const arr = input.split(" ").map(Number);

console.log(findNonDuplicate(arr));
