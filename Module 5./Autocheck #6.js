class Car {}
console.log(Car);

function f1() {
  document.querySelector(".output-1").innerHTML = Car;
}

document.querySelector(".btn-1").onclick = f1;
