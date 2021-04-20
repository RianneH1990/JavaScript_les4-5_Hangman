// Input:
// word: javascript
// guesses: ["a", "t", "i", "b", "k"]

// Output:
// _ a _ a _ _ _ i _ t

// Input:
// word: javascript
// guesses: []

// Output:
// _ _ _ _ _ _ _ _ _ _

// Steps:
// - Transformeren
// - For loop maken:
//    - Elke letter vervangen door een "_ "
//    - Tot we alle letters gehad hebben
// - return resultaat


function displayWordSoFar(word, guesses) {
  console.log("word:", word, "Guesses:", guesses);
  let output = "";
  for (let i = 0; i < word.length; i++){
    output = output + "_ ";
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