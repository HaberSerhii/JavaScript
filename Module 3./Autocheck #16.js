function countTotalSalary(salaries) {
  let totalSalary = 0;
  const objValue = Object.values(salaries);
  for (const value of objValue) {
    totalSalary += value;
  }

  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
