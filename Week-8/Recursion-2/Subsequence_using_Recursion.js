const findAllSubsequences = (str, index) => {
  if (index === str.length) {
    return [""];
  }

  const subseqsWithCurrent = findAllSubsequences(str, index + 1).map(
    (subseq) => str[index] + subseq
  );

  const subseqsWithoutCurrent = findAllSubsequences(str, index + 1);

  return subseqsWithCurrent.concat(subseqsWithoutCurrent);
};

const findAllSubsequencesWrapper = (str) => {
  return findAllSubsequences(str, 0);
};

// Test Case 1
const input1 = "abc";
console.log(findAllSubsequencesWrapper(input1));
// Output: [, a, b, ab, c, ac, bc, abc]

// Test Case 2
const input2 = "hello";
console.log(findAllSubsequencesWrapper(input2));
// Output: [, h, e, eh, l, lh, le, leh, l, lh, lo, loh, ll, llh, lle, lleh, ll, llh, llo, lloh, o, oh, ol, olh, oll, ollh, olle, olleh]
