// function abc(a, b) {
//   let answer = [];
//   let maxNum = Math.max(a, b);
//   let minNum = Math.min(a, b);
//   answer[0] = gcd(minNum, maxNum);
//   answer[1] = ccd(minNum, maxNum);
//   return answer;
// }
// //최대공약수
// function gcd(minNum, maxNum) {
//   return (minNum % maxNum) === 0 ? maxNum : gcd(minNum, minNum % maxNum);


// }
// //최소 공배수
// function ccd(minNum, maxNum) {
//   return (minNum * maxNum) / gcd(minNum, maxNum);
// }
// console.log(abc(2,5));

// function greatCommonDivisor(a, b) {
//   return b ? greatCommonDivisor(b, a % b) : Math.abs(a);
// }
// function leastCommonMultiple(a, b) {
//   return (a * b) / greatCommonDivisor(a, b);
// }
// function gcd(a, b) {
//   return [greatCommonDivisor(a, b), leastCommonMultiple(a, b)]
// }
// console.log(gcd(2,5));

// function gcdlcm(a, b) {
//   var gcd = calc_gcd(a, b);
//   console.log(gcd);

//   var lcm = (a * b) / gcd;

//   return [gcd, lcm];
// }

// function calc_gcd(a, b) {
//   if (b === 0) return a;
//   return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.

function gcdlcm(a, b) {
  let gcd = calcGcd(a, b);
  let lcm = (a * b) / gcd;
  return [gcd, lcm];
}
function calcGcd(a, b) {
  if (b === 0) return a;
  return a > b ? calcGcd(b, a % b) : calcGcd(a, b % a);
}

console.log(gcdlcm(3, 12));
