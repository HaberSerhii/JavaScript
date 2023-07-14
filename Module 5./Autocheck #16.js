class Car {
  static MAX_PRICE = 50000;

  #price;
  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      return (this.#price = newPrice);
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price);

audi.price = 49000;
console.log(audi.price);

audi.price = 51000;
console.log(audi.price);

function f1() {
  document.querySelector(".output-1").innerHTML = audi.price;
}

document.querySelector(".btn-1").onclick = f1;
