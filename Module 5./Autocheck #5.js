const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(child);

function f1() {
  document.querySelector(".output-1").innerHTML = child;
}

document.querySelector(".btn-1").onclick = f1;
