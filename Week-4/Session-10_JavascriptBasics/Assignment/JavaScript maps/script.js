function calcWordFrequencies() {
  const input = prompt("Enter a list of words separated by spaces: ");
  const words = input.trim().toLowerCase().split(" ");

  const frequencyMap = new Map();
  words.map((word) => {
    if (frequencyMap.has(word)) {
      frequencyMap.set(word, frequencyMap.get(word) + 1);
    } else {
      frequencyMap.set(word, 1);
    }
  });

  frequencyMap.forEach((value, key) => console.log(`${key} ${value}`));
}

calcWordFrequencies();
