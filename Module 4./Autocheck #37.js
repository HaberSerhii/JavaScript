const getTotalFriendCount = (users) => {
  const perFriends = users.flatMap((user) => user.friends.length);
  const totalFriends = perFriends.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return totalFriends;
};
console.log(getTotalFriendCount);

function f1() {
  document.querySelector(".output-1").innerHTML = perFriends;
}

document.querySelector(".btn-1").onclick = f1;
