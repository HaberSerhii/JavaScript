const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};

console.log(filterArray([5, 1, 50, 423, 234], 45));
function f1() {
  return (document.querySelector(".output-1").innerHTML = filterArray(
    [5, 1, 50, 423, 234],
    45
  ));
}
document.querySelector(".btn-1").onclick = f1;
