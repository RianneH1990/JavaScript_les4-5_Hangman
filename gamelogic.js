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
// - [ ] if else
// - [x] zo nee: "_ "
// - [ ] zo ja: "j " (niet j, maar de letter die we dan checken)
// - [ ] klaar? -> onze string die we hebben gemaakt returnen

function displayWordSoFar(word, guesses) {
  //console.log("word:", word, "Guesses:", guesses);
  const wordSplit = word.split("");
  //console.log(wordSplit);
  let output = "";
  for (let i = 0; i < wordSplit.length; i++){
    const letterInWord = wordSplit[i];
    //console.log("1 LETTER OF WORD TO GUESS:", letterInWord);
    const letterGuessed = guesses.includes(letterInWord);
    //console.log("GERADEN LETTERS: ", letterGuessed);
    if (!letterGuessed) {
      output = output + "_ ";
      //console.log(output);
    }
    else if (letterGuessed) {
      output = output + letterInWord + " ";
      console.log(output);
    }
  return output;
}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};