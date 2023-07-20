const calculateSumOfArrays = (array1, array2) => {
  if (
    array1.length !== array2.length ||
    array1[0].length !== array2[0].length
  ) {
    throw new Error("Arrays must have the same dimensions");
  }

  const sumArray = [];

  for (let i = 0; i < array1.length; i++) {
    const row = [];

    for (let j = 0; j < array1[0].length; j++) {
      const sum = array1[i][j] + array2[i][j];
      row.push(sum);
    }

    sumArray.push(row);
  }

  return sumArray;
};

// Test Case 1
const input1 = `2
3
1 2 3 4 5 6
2 3 7 8 9 10 11 12`;
const lines1 = input1.split("\n");
const rows1 = parseInt(lines1[0]);
const cols1 = parseInt(lines1[1]);
const array1 = lines1[2].split(" ").map(Number);
const array2 = lines1[3].split(" ").map(Number);
const matrix1 = [];
const matrix2 = [];
let index = 0;

for (let i = 0; i < rows1; i++) {
  const row1 = [];
  const row2 = [];

  for (let j = 0; j < cols1; j++) {
    row1.push(array1[index]);
    row2.push(array2[index]);
    index++;
  }

  matrix1.push(row1);
  matrix2.push(row2);
}

try {
  const sumArray1 = calculateSumOfArrays(matrix1, matrix2);
  console.log("Test Case 1:");
  console.log("Example output:");
  for (const row of sumArray1) {
    console.log(row.join(" "));
  }
} catch (error) {
  console.error(error.message);
}

// Test Case 2
const input2 = `2
2
1 2 3 4
2 2 5 6 7 8`;
const lines2 = input2.split("\n");
const rows2 = parseInt(lines2[0]);
const cols2 = parseInt(lines2[1]);
const array3 = lines2[2].split(" ").map(Number);
const array4 = lines2[3].split(" ").map(Number);
const matrix3 = [];
const matrix4 = [];
let index2 = 0;

for (let i = 0; i < rows2; i++) {
  const row3 = [];
  const row4 = [];

  for (let j = 0; j < cols2; j++) {
    row3.push(array3[index2]);
    row4.push(array4[index2]);
    index2++;
  }

  matrix3.push(row3);
  matrix4.push(row4);
}

try {
  const sumArray2 = calculateSumOfArrays(matrix3, matrix4);
  console.log("Test Case 2:");
  console.log("Example output:");
  for (const row of sumArray2) {
    console.log(row.join(" "));
  }
} catch (error) {
  console.error(error.message);
}
