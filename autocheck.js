const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive === true);
};

console.log(isEveryUserActive);

function f1() {
  document.querySelector(".output-1").innerHTML = isEveryUserActive;
}

document.querySelector(".btn-1").onclick = f1;
