function changeEven(numbers, value) {
  const newNumbers = numbers.map((element) => {
    if (element % 2 === 0) {
      return element + value;
    }
    return element;
  });
  return newNumbers;
}

console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
function f1() {
  return (document.querySelector(".output-1").innerHTML = changeEven(
    [44, 13, 81, 92, 36, 54],
    100
  ));
}
document.querySelector(".btn-1").onclick = f1;
