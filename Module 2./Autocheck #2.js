function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));
