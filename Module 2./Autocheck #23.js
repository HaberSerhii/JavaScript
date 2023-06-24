function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
