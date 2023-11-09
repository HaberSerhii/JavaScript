//! TASK 1

// function repeatStr(n, s) {
//   let str = "";
//   for (let i = 0; i < n; i += 1) {
//     str += s;
//   }
//   return str;
// }

// console.log(repeatStr(3, "*"));

//! TASK 2

// function century(year) {
//   let countCentury =
//     year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
//   return countCentury;
// }

// console.log(century(2001));

//! TASK 3

// function numberToString(num) {
//   let str = `${num}`;
//   return str;
// }

// console.log(numberToString(37));

//! TASK 4

// function getCount(str) {
//   const vowels = "aeiou";
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(getCount("abr"));

//! TASK 5

// function findNeedle(haystack) {
//   if (!Array.isArray(haystack)) {
//     return console.log(`We need push array`);
//   }
//   if (haystack.includes("needle")) {
//     return console.log(
//       `found the needle at position ${haystack.indexOf("needle")}`
//     );
//   }
// }

// findNeedle([null]);

//! TASK 6

// function bmi(weight, height) {
//   const massIndex = weight / (height * height);
//   if (massIndex <= 18.5) {
//     return "Underweight";
//   } else if (massIndex <= 25.0) {
//     return "Normal";
//   } else if (massIndex <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// console.log(bmi(50, 1.92));

//! TASK 7

// function betterThanAverage(classPoints, yourPoints) {
//   if (!Array.isArray(classPoints)) {
//     return "Need Array";
//   }
//   let totalPoints = 0;
//   classPoints.forEach((point) => {
//     totalPoints += point;
//   });
//   const midPoints = totalPoints / classPoints.length;
//   return midPoints < yourPoints;
// };

// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));

//! TASK 8

// const mathFn = function (value) {
//   let mathOperations = value * -2 + value;
//   return mathOperations;
// };

// const counter = function (number) {
//   if (number < 0) {
//     return `Число від'ємне`;
//   }
//   return number;
// };

// console.log(counter(mathFn(33)));

//! TASK 9

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c1 = Object.assign({}, a, b);

// const c = { ...a, ...b };

// console.table(c);

//! TASK 10

// const playlist = {
//   name: "My favorite playlist",
//   rating: 5,
//   tracks: ["track-1, track-2, track-3, track-4"],
//   trackCount: 0,
// };
// const countTrack = playlist.tracks[0].split(", ").length;
// playlist.trackCount = countTrack;
// console.table(playlist);

//! TASK 11
/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];
//       if (productName === item.name && item.quantity !== 0) {
//         item.quantity -= 1;
//         if (item.quantity === 0) {
//           items.splice(i, 1);
//           return console.log(`Товара ${item.name} нет в корзине.`);
//         }
//         return;
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.table(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());
// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove("🍇");
// cart.remove("🍇");
// cart.remove("🍇");
// cart.remove("🍎");
// cart.remove("🍋");
// cart.remove("🍋");
// cart.remove("🍓");
// cart.remove("🍓");
// cart.remove("🍓");

// console.table(cart.getItems());

// cart.add({ name: "🍓", price: 110 });
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());
// cart.remove("🍓");

// console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity("🍎");

// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");
// console.table(cart.getItems());

//! TASK 12

// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const filter = (arrayItems, callback) => {
//   const filteredArray = [];

//   for (const item of arrayItems) {
//     const passed = callback(item);
//     if (passed) {
//       filteredArray.push(item);
//     }
//   }
//   return filteredArray;
// };

// const getFruitsWithQuantity = (fruit) => fruit.quantity >= 120;

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.table(r3);

//! TASK 13

const fruits = [
  { name: "🍎", price: 50 },
  { name: "🍇", price: 70 },
  { name: "🍋", price: 60 },
  { name: "🍓", price: 110 },
];

const fruitsName = fruits.map((fruit) => fruit.name);
const fruitsPrice = fruits.map((fruit) => fruit.price ** 2);

console.log(fruitsName.length);
console.log(fruitsPrice.length);

const updateArrPrice = fruits.map((fruit) => ({
  ...fruit,
  price: fruit.price * 2,
}));

console.table(updateArrPrice);

//! TASK 14
