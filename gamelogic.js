// Input:
// word: javascript
// guesses: ["a", "t", "i", "b", "k"]

// Output:
// _ a _ a _ _ _ i _ t

// DOEL:
// WOORD: javascript, GUESSES: [] -> "_ _ _ _ _ _ _ _ _ _ "
// WOORD: javascript, GUESSES: ['a', 'b'] -> "_ a _ a _ _ _ _ _ _ "

// - [x] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
// - [x] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
// - [x] checken: zit de letter in guesses?
// - [x] if else
// - [x] zo nee: "_ "
// - [x] zo ja: "j " (niet j, maar de letter die we dan checken)
// - [ ] klaar? -> onze string die we hebben gemaakt returnen

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