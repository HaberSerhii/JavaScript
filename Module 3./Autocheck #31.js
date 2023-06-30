function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += args[i];
  }
  return sum;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
