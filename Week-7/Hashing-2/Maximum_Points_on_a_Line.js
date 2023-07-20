const maxPointsOnLine = (points) => {
  const n = points.length;
  if (n < 3) {
    return n;
  }

  let maxPoints = 0;

  for (let i = 0; i < n; i++) {
    const slopes = new Map();
    let samePointCount = 0;
    let verticalCount = 0;
    let currentMax = 0;

    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      if (x1 === x2 && y1 === y2) {
        samePointCount++;
      } else if (x1 === x2) {
        verticalCount++;
        currentMax = Math.max(currentMax, verticalCount);
      } else {
        const slope = (y2 - y1) / (x2 - x1);
        slopes.set(slope, (slopes.get(slope) || 0) + 1);
        currentMax = Math.max(currentMax, slopes.get(slope));
      }
    }

    maxPoints = Math.max(maxPoints, currentMax + samePointCount + 1);
  }

  return maxPoints;
};

// Test Case 1
const input1 = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log("Test Case 1:");
console.log(maxPointsOnLine(input1)); // Output: 3

// Test Case 2
const input2 = [
  [1, 1],
  [2, 2],
  [3, 3],
];
console.log("Test Case 2:");
console.log(maxPointsOnLine(input2)); // Output: 3
