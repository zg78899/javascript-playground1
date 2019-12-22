// 나의 풀이

function solution(n) {

  let res = [];
  let result = n.toString();
  for (let i = 0; i < result.length; i++) {
    res.push(parseInt(result[i]));
  }
  return res.sort().reverse();

}
console.log(solution(12345))

function solution(n){
  return n.toString().split('').sort().reverse().map(v=>parseInt(v))
}
function solution(n){
  return (n+'').split('').sort(function(a,b){return b-a}).map(v=>parseInt(v))
}
function solution(n){
  return n.toString().split('').reverse().map(v=>parseInt(v))
}
//sort 하면 안되는 이유가?