function solution(n) {
  let res = [];
  let arr = res.push(n);
  return arr.sort(function (a, b) { return b - a });

}
console.log(solution(118372));