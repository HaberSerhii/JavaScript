const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOF(friends) === index)
    .sort((firstUser, secondUser) =>
      firstUser.friends.localeCompare(secondUser.friends)
    );
};

console.log(getSortedFriends);

function f1() {
  document.querySelector(".output-1").innerHTML = getSortedFriends;
}

document.querySelector(".btn-1").onclick = f1;
