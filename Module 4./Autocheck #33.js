const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive === true);
};

console.log(isAnyUserActive);

function f1() {
  document.querySelector(".output-1").innerHTML = isAnyUserActive;
}

document.querySelector(".btn-1").onclick = f1;
