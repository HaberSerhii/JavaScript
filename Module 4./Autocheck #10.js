const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};
console.log(calculateTotalPrice([5, 1, 50, 423, 234]));
function f1() {
  return (document.querySelector(".output-1").innerHTML = calculateTotalPrice([
    5, 1, 50, 423, 234,
  ]));
}
document.querySelector(".btn-1").onclick = f1;
