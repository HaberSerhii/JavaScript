const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths);

function f1() {
  document.querySelector(".output-1").innerHTML = planetsLengths;
}

document.querySelector(".btn-1").onclick = f1;
