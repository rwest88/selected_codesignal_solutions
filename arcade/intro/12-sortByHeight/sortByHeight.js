function sortByHeight(a) {
  let x = 0;
  let trees = [];
  let sorted = [];
  while (x <= a.length) {
    let y = a.indexOf(-1, x);
    if (y === -1) break;
    x = y + 1;
    trees.push(y);
  }
  let people = a.filter(elem => elem !== -1).sort((a,b) => a - b);
  console.log(people, trees);
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (trees.includes(i)) sorted.push(-1);
    else {
      sorted.push(people[j]);
      j++;
    }
  }
  return sorted;
}
