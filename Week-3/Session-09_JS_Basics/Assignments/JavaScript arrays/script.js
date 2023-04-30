const nums = [2, 4, 6, 8, 0];

const divideArray = (numbers) => {
  const evenNums = [];
  const oddNums = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  }

  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => a - b);

  if (evenNums.length === 0) {
    console.log("None");
  } else {
    console.log("Even numbers: ", evenNums);
  }

  if (oddNums.length === 0) {
    console.log("None");
  } else {
    console.log("Odd numbers: ", oddNums);
  }
};

divideArray(nums);
