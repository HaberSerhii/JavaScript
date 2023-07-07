function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
let result = makePizza();
let pointer = makePizza;

function f1() {
  return (document.querySelector(".output-1").innerHTML = result);
}

document.querySelector(".btn-1").onclick = f1;
