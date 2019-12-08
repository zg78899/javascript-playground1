
function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort();
  for (let i = 0; i < d.length; i++) {
    count++;
    sum += d[i];
    if (sum > budget) {
      count--;
      break;
    }
  }
  return count;
}

