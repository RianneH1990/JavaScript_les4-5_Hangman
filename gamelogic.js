
function displayWordSoFar(word, guesses) {
  const wordSplit = word.split("");

  let output = "";
  for (let i = 0; i < wordSplit.length; i++) {
    const letterInWord = wordSplit[i];
    const letterGuessed = guesses.includes(letterInWord);

    if (!letterGuessed) {
      output = output + "_ ";
    }
    if (letterGuessed) {
      output = output + letterInWord + " ";
      console.log(output);
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const wordSplit = word.split("");

  for (let i = 0; i < wordSplit.length; i++) {
    const letterInWord = wordSplit[i];
    const letterGuessedArray = guesses.includes(letterInWord);

    if (!letterGuessedArray) {
      return false;
    }
  }
  return true;
}

function isGameLost(word, guesses) {
  let mistakes = 0;

  for (let i = 0; i < guesses.length; i++) {
    const guess = guesses[i];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakes = mistakes + 1;
    }
  }
  const maxMistakeCount = 7;
  if (mistakes >= maxMistakeCount) {
    return true;
  }else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};