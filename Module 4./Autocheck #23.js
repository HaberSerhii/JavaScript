const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};

console.log(getUsersWithAge);

function f1() {
  document.querySelector(".output-1").innerHTML = getUsersWithAge;
}

document.querySelector(".btn-1").onclick = f1;
