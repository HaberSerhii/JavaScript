function repeatStr(n, s) {
  let Str = "";
  for (let i = 0; i < n; i += 1) {
    Str += s;
  }
  return Str;
}

console.log(repeatStr(3, "*"));
