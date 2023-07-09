const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers);

function f1() {
  document.querySelector(".output-1").innerHTML = oddNumbers;
}

document.querySelector(".btn-1").onclick = f1;
