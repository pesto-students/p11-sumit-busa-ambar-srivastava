// Your solution goes here

function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess;

  while (guessCount < totalGuesses) {
    guess = prompt(
      guessCount === 0
        ? "Enter a number between 1 and 100."
        : `${guess} is too ${guess < numToGuess ? "small" : "large"}. Guess a ${
            guess < numToGuess ? "larger" : "smaller"
          } number.`
    );

    if (guess === null) {
      return 0;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess)) {
      alert("Please enter a number.");
      continue;
    }

    guessCount++;

    if (guess === numToGuess) {
      return guessCount;
    }
  }

  return 0;
}

const numToGuess = 42;
const totalGuesses = 5;
const numGuesses = playGuessingGame(numToGuess, totalGuesses);

if (numGuesses === 0) {
  console.log(
    `You didn't guess the number ${numToGuess} within ${totalGuesses} guesses.`
  );
} else {
  console.log(
    `You guessed the number ${numToGuess} correctly in ${numGuesses} guesses!`
  );
}
