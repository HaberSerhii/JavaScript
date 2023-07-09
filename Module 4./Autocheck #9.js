const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

function f1() {
  return (document.querySelector(".output-1").innerHTML = calculateTotalPrice(
    4,
    20
  ));
}
document.querySelector(".btn-1").onclick = f1;
