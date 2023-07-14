class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
}

function f1() {
  document.querySelector(".output-1").innerHTML = Admin.AccessLevel.BASIC;
}

document.querySelector(".btn-1").onclick = f1;
