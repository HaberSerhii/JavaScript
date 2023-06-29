const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = Object.keys(apartment);
const values = Object.values(apartment);
const keyApp = [];
const valApp = [];

for (const key of keys) {
  keyApp.push(key);
}
for (const value of values) {
  valApp.push(value);
}

console.log(keyApp);
console.log(valApp);
