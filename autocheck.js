const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((sum, user) => sum + user.balance, 0);
};

console.log(getTotalBalanceByGender);

function f1() {
  document.querySelector(".output-1").innerHTML = getTotalBalanceByGender;
}

document.querySelector(".btn-1").onclick = f1;
