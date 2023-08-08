const findPaths = (rows, columns) => {
  const result = [];

  const backtrack = (row, col, path) => {
    if (row === rows - 1 && col === columns - 1) {
      result.push(path);
      return;
    }

    if (row < rows - 1) {
      backtrack(row + 1, col, path + "D");
    }

    if (col < columns - 1) {
      backtrack(row, col + 1, path + "R");
    }
  };

  backtrack(0, 0, "");
  return result;
};

// Test Case 1
const rows1 = 3;
const columns1 = 3;
console.log(findPaths(rows1, columns1));
// Output: ["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]

// Test Case 2
const rows2 = 2;
const columns2 = 2;
console.log(findPaths(rows2, columns2));
// Output: ["RD", "DR"]
