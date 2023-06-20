function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
}

console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
