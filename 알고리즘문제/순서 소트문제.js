function solution(n) {
  let arr = n.toString();
  let answer = arr.split('');
  answer = answer.sort().reverse();
  const result = answer.join('');
  console.log(result);
  return result;
}
solution(112312836);