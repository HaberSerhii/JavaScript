function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (const item of numbers) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  }
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5]), 3);
console.log(filterArray([1, 2, 3, 4, 5]), 4);
console.log(filterArray([1, 2, 3, 4, 5]), 5);
console.log(filterArray([12, 24, 8, 41, 76]), 38);
console.log(filterArray([12, 24, 8, 41, 76]), 20);
