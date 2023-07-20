const reverseNumber = (num) => {
  let reversedNum = 0;

  while (num !== 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversedNum;
};

console.log(reverseNumber(12345));
console.log(reverseNumber(100));
