function findLongestWord(string) {
  let words = string.split(" ");
  let longestWord = "";

  for (i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
