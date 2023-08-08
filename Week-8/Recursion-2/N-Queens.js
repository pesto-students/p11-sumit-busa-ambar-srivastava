const solveNQueens = (n) => {
  const result = [];
  const queens = [];

  const isSafe = (row, col) => {
    for (let i = 0; i < queens.length; i++) {
      const [r, c] = queens[i];
      if (c === col || Math.abs(r - row) === Math.abs(c - col)) {
        return false;
      }
    }
    return true;
  };

  const backtrack = (row) => {
    if (row === n) {
      result.push([...queens]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        queens.push([row, col]);
        backtrack(row + 1);
        queens.pop();
      }
    }
  };

  backtrack(0);
  return result;
};

// Test Case 1
const n1 = 4;
console.log(solveNQueens(n1));
// Output: [[0, 1], [1, 3], [2, 0], [3, 2]] [[0, 2], [1, 0], [2, 3], [3, 1]]

// Test Case 2
const n2 = 2;
console.log(solveNQueens(n2));
// Output: []
