function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";

  return message;
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));
