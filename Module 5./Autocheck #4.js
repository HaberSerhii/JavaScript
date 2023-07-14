const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child);

function f1() {
  document.querySelector(".output-1").innerHTML = child;
}

document.querySelector(".btn-1").onclick = f1;
