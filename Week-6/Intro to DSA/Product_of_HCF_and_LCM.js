const calculateHCF = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const calculateLCM = (a, b) => {
  const hcf = calculateHCF(a, b);
  return (a * b) / hcf;
};

const runTestCases = (testCases) => {
  for (let i = 0; i < testCases.length; i++) {
    const [a, b] = testCases[i];
    const hcf = calculateHCF(a, b);
    const lcm = calculateLCM(a, b);
    const product = hcf * lcm;

    console.log(`Test Case ${i + 1}`);
    console.log(`Inputs: ${a}, ${b}`);
    console.log(`HCF: ${hcf}`);
    console.log(`LCM: ${lcm}`);
    console.log(`Product of HCF and LCM: ${product}`);
    console.log("------------");
  }
};

const testCases = [
  [6, 8],
  [15, 25],
];

runTestCases(testCases);
