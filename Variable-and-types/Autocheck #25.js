function checkStorage(available, ordered) {
  let message;

  message =
    available < ordered
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
