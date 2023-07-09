const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

console.log(getUsersWithFriend);

function f1() {
  document.querySelector(".output-1").innerHTML = getUsersWithFriend;
}

document.querySelector(".btn-1").onclick = f1;
