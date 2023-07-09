const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
console.log(getFriends);

function f1() {
  document.querySelector(".output-1").innerHTML = getFriends;
}

document.querySelector(".btn-1").onclick = f1;
