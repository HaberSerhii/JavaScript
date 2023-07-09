const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames);

function f1() {
  document.querySelector(".output-1").innerHTML = getUserNames;
}

document.querySelector(".btn-1").onclick = f1;
