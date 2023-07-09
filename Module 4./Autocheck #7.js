function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(function (number) {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });
  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

function f1() {
  return (document.querySelector(".output-1").innerHTML = getCommonElements(
    [10, 20, 30, 40],
    [4, 30, 17, 10, 40]
  ));
}

document.querySelector(".btn-1").onclick = f1;
