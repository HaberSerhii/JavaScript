const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244];
const totalPlayTime = playtimes.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);

function f1() {
  document.querySelector(".output-1").innerHTML = averagePlayTime;
}

document.querySelector(".btn-1").onclick = f1;
