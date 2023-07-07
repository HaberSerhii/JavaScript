function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (number, index) {
    totalPrice += number;
  });
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

function f1() {
  return (document.querySelector(".output-1").innerHTML = calculateTotalPrice([
    12, 85, 37, 4,
  ]));
}

document.querySelector(".btn-1").onclick = f1;
