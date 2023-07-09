const calculateTotalBalance = (users) => {
  const perBalance = users.map((user) => user.balance);
  const totalBalance = perBalance.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalBalance;
};

console.log(calculateTotalBalance);

function f1() {
  document.querySelector(".output-1").innerHTML = perBalance;
}

document.querySelector(".btn-1").onclick = f1;
