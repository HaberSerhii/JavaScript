function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
