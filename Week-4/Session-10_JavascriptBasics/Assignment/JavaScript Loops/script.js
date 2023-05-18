function drawTriangle(triangleSize) {
  // Your solution goes here
  for (let i = 0; i < triangleSize; i++) {
    let star = "";
    for (let j = 0; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

drawTriangle(4);
