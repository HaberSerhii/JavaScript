function calculateTotalPrice(order) {
  let total = 0;
  for (i = 0; i < order.length; i += 1) {
    const item = order[i];
    total += item;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
