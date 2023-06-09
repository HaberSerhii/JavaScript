function countProps(object) {
  let propCount = 0;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
