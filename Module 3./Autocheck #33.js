function findMatches(firstArg, ...args) {
  const matches = [];
  for (let i = 0; i < args.length; i += 1)
    if (firstArg.includes(args[i])) {
      matches.push(args[i]);
    }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
