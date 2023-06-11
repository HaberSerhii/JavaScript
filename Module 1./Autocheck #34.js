function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

console.log(normalizeInput("Hello world"));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput("Big SALE"));
