function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));
