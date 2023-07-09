const sortByDescendingFriendCount = (users) => {
  const sortedUsers = [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );

  return sortedUsers;
};

console.log(sortByDescendingFriendCount);

function f1() {
  document.querySelector(".output-1").innerHTML = sortByDescendingFriendCount;
}

document.querySelector(".btn-1").onclick = f1;
