function calculateTotal(number) {
  let sumNumber = 0;
  for (let i = 1; i <= number; i++) {
    sumNumber += i;
  }
  return sumNumber;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
