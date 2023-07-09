const sortByAscendingBalance = (users) => {
  const sortedUsers = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
  return sortedUsers;
};

console.log(sortedUsers);

function f1() {
  document.querySelector(".output-1").innerHTML = sortedUsers;
}

document.querySelector(".btn-1").onclick = f1;
