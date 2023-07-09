const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);

function f1() {
  document.querySelector(".output-1").innerHTML = authorsInReversedOrder;
}

document.querySelector(".btn-1").onclick = f1;
