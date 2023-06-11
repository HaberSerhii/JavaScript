function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "eg0r"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Egor Kolbasov", "Vadim"));
console.log(checkForName("Egor Kolbasov", "vadim"));
console.log(checkForName("Egor Kolbasov", "Dima"));
