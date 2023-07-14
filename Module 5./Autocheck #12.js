class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

function f1() {
  document.querySelector(".output-1").innerHTML = new Car({
    brand: "BMW",
    model: "X5",
    price: 58900,
  });
}

document.querySelector(".btn-1").onclick = f1;
