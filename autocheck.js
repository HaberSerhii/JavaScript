function f1() {
  const test = 14;
  console.log(test);
  document.querySelector(".output-1").innerHTML = test;
}

document.querySelector(".btn-1").onclick = f1;
