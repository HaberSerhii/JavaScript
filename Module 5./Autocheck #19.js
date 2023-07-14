class User {
  email;

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
  #accesslevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.#accesslevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  get accessLevel() {
    return this.#accesslevel;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

function f1() {
  document.querySelector(".output-1").innerHTML = mango.accessLevel;
}

document.querySelector(".btn-1").onclick = f1;
