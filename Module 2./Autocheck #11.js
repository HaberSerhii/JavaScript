function calculateEngravingPrice(message, pricePerWord) {
  const perWords = message.split(" ");
  const totalWords = perWords.length;
  const totalPrice = totalWords * pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));
