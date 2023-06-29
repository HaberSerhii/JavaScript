function countProps(object) {
  let propCount = [];
  const keys = Object.keys(object);
  for (const key of keys) {
    propCount.push(object[key]);
  }
  return propCount.length;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
