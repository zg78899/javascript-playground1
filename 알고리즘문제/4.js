function numPY(s) {
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s);
    if (s[i] === 'p' || s[i] === 'P') {
      // eslint-disable-next-line no-plusplus
      pCount++;
    } else if (s[i] === 'y' || s[i] === 'Y') {
      // eslint-disable-next-line no-plusplus
      yCount++;
    }
  }
  if (pCount === yCount) {
    return true;
  }

  return false;
}
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());