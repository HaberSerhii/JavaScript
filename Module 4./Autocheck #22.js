const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor);

function f1() {
  document.querySelector(".output-1").innerHTML = getUsersWithEyeColor;
}

document.querySelector(".btn-1").onclick = f1;
