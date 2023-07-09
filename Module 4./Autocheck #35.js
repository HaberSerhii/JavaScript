const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const playtimes = players.map((player) => player.playtime / player.gamesPlayed);
const totalAveragePlaytimePerGame = playtimes.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
const averagePlayTime = totalAveragePlaytimePerGame / players.length;
console.log(playtimes);

function f1() {
  document.querySelector(".output-1").innerHTML = averagePlayTime;
}

document.querySelector(".btn-1").onclick = f1;
