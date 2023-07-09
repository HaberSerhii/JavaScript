const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];
  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};

console.log(getCommonElements([5, 1, 50, 423, 234], [45]));
function f1() {
  return (document.querySelector(".output-1").innerHTML = getCommonElements(
    [5, 1, 50, 423, 234],
    [45]
  ));
}
document.querySelector(".btn-1").onclick = f1;
