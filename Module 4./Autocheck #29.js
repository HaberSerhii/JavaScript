const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail);

function f1() {
  document.querySelector(".output-1").innerHTML = getUserWithEmail;
}

document.querySelector(".btn-1").onclick = f1;
