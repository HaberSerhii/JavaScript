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

const playlist = {
  name: "My favorite playlist",
  rating: 5,
  tracks: ["track-1, track-2, track-3, track-4"],
  trackCount: 0,
};
const countTrack = playlist.tracks[0].split(", ").length;
playlist.trackCount = countTrack;
console.table(playlist);
