function numPY(s) {
  
  console.log(typeof s);

  const target = s.toLowerCase();

  let pCount = 0;
  let yCount = 0;

  for (let i = 0; target.length; i++) {
    if (target[i] === 'p')++pCount;
    if (target[i] === 'y')++yCount;
  }
  return pCount === yCount;
}
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY());

// if(!s)return true;
//   let pCount = 0;
//   let yCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     console.log(s);
//     if (s[i] === 'p' || s[i] === 'P') {
//       // eslint-disable-next-line no-plusplus
//       pCount++;
//     } else if (s[i] === 'y' || s[i] === 'Y') {
//       // eslint-disable-next-line no-plusplus
//       yCount++;
//     }
//   }
//   if (pCount === yCount) {
//     return true;
//   }

//   return false;
// }
// console.log(numPY('pPoooyY'));
// console.log(numPY('Pyy'));
// console.log(numPY('ab'));
// console.log(numPY(''));
// console.log(numPY())

function numPY(s) {
  if (!s) return true;
  const matchP = s.match(/p/ig);
  const matchY = s.match(/y/ig);
  return (matchP ? matchP.length : 0) === (matchY ? matchY.length : 0);
}
console.log(numPY('pPoooyY'));
console.log(numPY('Pyy'));
console.log(numPY('ab'));
console.log(numPY(''));
console.log(numPY())