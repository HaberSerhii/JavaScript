const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

console.log(getActiveUsers);

function f1() {
  document.querySelector(".output-1").innerHTML = getFriends;
}

document.querySelector(".btn-1").onclick = f1;
