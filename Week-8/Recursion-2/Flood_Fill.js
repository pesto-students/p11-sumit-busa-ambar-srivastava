const floodFill = (grid, row, col, newColor) => {
  const startingColor = grid[row][col];
  const visited = new Array(grid.length)
    .fill()
    .map(() => new Array(grid[0].length).fill(false));

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      visited[r][c] ||
      grid[r][c] !== startingColor
    ) {
      return;
    }
    visited[r][c] = true;
    grid[r][c] = newColor;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  dfs(row, col);
  return grid;
};

// Test Case 1
const grid1 = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const row1 = 1;
const col1 = 1;
const newColor1 = 2;
console.log(floodFill(grid1, row1, col1, newColor1));
// Output: [[1, 2, 1], [2, 2, 0], [1, 0, 1]]

// Test Case 2
const grid2 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const row2 = 0;
const col2 = 0;
const newColor2 = 3;
console.log(floodFill(grid2, row2, col2, newColor2));
// Output: [[3, 3, 3], [3, 3, 3], [3, 3, 3]]
