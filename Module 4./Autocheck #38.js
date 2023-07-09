const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);

function f1() {
  document.querySelector(".output-1").innerHTML = alphabeticalAuthors;
}

document.querySelector(".btn-1").onclick = f1;
