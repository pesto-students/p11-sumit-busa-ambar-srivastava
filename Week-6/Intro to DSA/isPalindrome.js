const isPalindrome = (num) => {
  let originalNum = num;
  let reversedNum = 0;

  while (num !== 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  if (originalNum === reversedNum) {
    return true;
  } else return false;
};

console.log(isPalindrome(12321)); //Output: true
console.log(isPalindrome(12345)); //Output: false

//Time Complexity is O(log n)
//Space Complexity is O(1)
