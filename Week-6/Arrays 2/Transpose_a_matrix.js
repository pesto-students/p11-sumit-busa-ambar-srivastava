const transposeMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposedMatrix = [];

  for (let j = 0; j < cols; j++) {
    const row = [];
    for (let i = 0; i < rows; i++) {
      row.push(matrix[i][j]);
    }
    transposedMatrix.push(row);
  }

  return transposedMatrix;
};

// Test Case 1
const input1 = `2
2
1 2 3 4`;
const lines1 = input1.split("\n");
const rows1 = parseInt(lines1[0]);
const cols1 = parseInt(lines1[1]);
const array1 = lines1[2].split(" ").map(Number);
const matrix1 = [];
let index = 0;

for (let i = 0; i < rows1; i++) {
  const row1 = [];

  for (let j = 0; j < cols1; j++) {
    row1.push(array1[index]);
    index++;
  }

  matrix1.push(row1);
}

const transposedMatrix1 = transposeMatrix(matrix1);
console.log("Test Case 1:");
console.log("Example output:");
for (const row of transposedMatrix1) {
  console.log(row.join(" "));
}

// Test Case 2
const input2 = `2
4
1 2 3 4 5 6 7 8`;
const lines2 = input2.split("\n");
const rows2 = parseInt(lines2[0]);
const cols2 = parseInt(lines2[1]);
const array2 = lines2[2].split(" ").map(Number);
const matrix2 = [];
let index2 = 0;

for (let i = 0; i < rows2; i++) {
  const row2 = [];

  for (let j = 0; j < cols2; j++) {
    row2.push(array2[index2]);
    index2++;
  }

  matrix2.push(row2);
}

const transposedMatrix2 = transposeMatrix(matrix2);
console.log("Test Case 2:");
console.log("Example output:");
for (const row of transposedMatrix2) {
  console.log(row.join(" "));
}
