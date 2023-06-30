function addOverNum(...args) {
  let total = 0;
  let firstNumber = args[0];
  for (const arg of args) {
    if (firstNumber < arg) {
      total += arg;
    }
  }
  return total;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
