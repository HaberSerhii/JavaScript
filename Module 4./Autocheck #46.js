const getNamesSortedByFriendCount = (users) => {
  const sortedUsers = [...users].sort(
    (firstUser, secondUser) =>
      firstUser.friends.length - secondUser.friends.length
  );

  const sortedNames = sortedUsers.map((user) => user.name);
  return sortedNames;
};

console.log(sortedNames);

function f1() {
  document.querySelector(".output-1").innerHTML = sortedNames;
}

document.querySelector(".btn-1").onclick = f1;
