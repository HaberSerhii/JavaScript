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

function getCount(str) {
  const vowels = "aeiou";
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(getCount("abr"));
