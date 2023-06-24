function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  for (let i = 0; i < fruits.length; i += 1)
    if (fruits[i] === fruit) {
      return true;
    }
  return false;
}

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  return fruits.includes(fruit);
}

console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));
