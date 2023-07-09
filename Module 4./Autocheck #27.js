const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive !== true);
};

console.log(getInactiveUsers);

function f1() {
  document.querySelector(".output-1").innerHTML = getInactiveUsers;
}

document.querySelector(".btn-1").onclick = f1;
