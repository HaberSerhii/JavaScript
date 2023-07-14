class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const newCar = new Car();
console.log(new Car("Audi", "Q3", 36000));

function f1() {
  document.querySelector(".output-1").innerHTML = 123;
}

document.querySelector(".btn-1").onclick = f1;
