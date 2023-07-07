const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(`Your order is accepted. Cooking pizza ${pizzaName}.`);
    }
    return onError(
      `Error! There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

function makePizza(pizzaMessage) {
  return pizzaMessage;
}

function onOrderError(error) {
  return error;
}

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

function f1() {
  return (document.querySelector(".output-1").innerHTML = pizzaPalace.order(
    "Smoked",
    makePizza,
    onOrderError
  ));
}

document.querySelector(".btn-1").onclick = f1;
