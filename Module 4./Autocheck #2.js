function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
function f1() {
  return (document.querySelector(".output-1").innerHTML = makePizza(
    "Ultracheese",
    makePizza(pizzaName)
  ));
}

document.querySelector(".btn-1").onclick = f1;
