function solution(n) {
  let arr = n.toString();
  let answer = arr.split('');
  answer = answer.sort().reverse();
  const result = answer.join('');
  console.log(typeof result);
  return parseInt(result);
}
solution(112312836);
funci