const sortByName = (users) => {
  const sortedUsers = [...users].sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(secondUser.name)
  );
  return sortedUsers;
};

console.log(sortByName);

function f1() {
  document.querySelector(".output-1").innerHTML = sortByName;
}

document.querySelector(".btn-1").onclick = f1;
