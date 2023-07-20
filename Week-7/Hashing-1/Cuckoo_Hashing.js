const MAX_ITERATIONS = 100;

// Define the hash functions
const hashFunction1 = (key) => key % 7;
const hashFunction2 = (key) => Math.floor(key / 7) % 7;

const cuckooHashing = (keyValuePairs) => {
  // Initialize two empty hash tables
  const hashTable1 = new Array(7);
  const hashTable2 = new Array(7);

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    // Iterate through the key-value pairs
    for (const pair of keyValuePairs) {
      const [key, value] = pair;

      // Calculate hash values using hash functions
      const hash1 = hashFunction1(key);
      const hash2 = hashFunction2(key);

      // Check if hashTable1[hash1] is empty or the same key is already present
      if (!hashTable1[hash1] || hashTable1[hash1][0] === key) {
        // Place the key-value pair in hashTable1
        hashTable1[hash1] = [key, value];
      } else if (!hashTable2[hash2] || hashTable2[hash2][0] === key) {
        // Place the key-value pair in hashTable2
        hashTable2[hash2] = [key, value];
      } else {
        // Swap the elements between hashTable1 and hashTable2
        [hashTable1[hash1], hashTable2[hash2]] = [
          hashTable2[hash2],
          hashTable1[hash1],
        ];
      }
    }
  }

  return [hashTable1, hashTable2];
};

// Test Case 1
const input1 = `12 apple
43 banana
15 orange
27 mango
37 pineapple`;
const keyValuePairs1 = input1.split("\n").map((pair) => {
  const [key, value] = pair.split(" ");
  return [parseInt(key), value];
});

console.log("Test Case 1:");
const [hashTable1_1, hashTable2_1] = cuckooHashing(keyValuePairs1);
console.log("HashTable 1:");
hashTable1_1.forEach((pair) => {
  if (pair) console.log(pair.join(" "));
});
console.log("HashTable 2:");
hashTable2_1.forEach((pair) => {
  if (pair) console.log(pair.join(" "));
});

// Test Case 2
const input2 = `1 apple
2 banana
3 orange
4 mango
5 pineapple`;
const keyValuePairs2 = input2.split("\n").map((pair) => {
  const [key, value] = pair.split(" ");
  return [parseInt(key), value];
});

console.log("Test Case 2:");
const [hashTable1_2, hashTable2_2] = cuckooHashing(keyValuePairs2);
console.log("HashTable 1:");
hashTable1_2.forEach((pair) => {
  if (pair) console.log(pair.join(" "));
});
console.log("HashTable 2:");
hashTable2_2.forEach((pair) => {
  if (pair) console.log(pair.join(" "));
});
