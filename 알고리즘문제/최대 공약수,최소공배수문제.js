function abc(a, b) {
  let answer = [];
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = ccd(minNum, maxNum);

}
//최대공약수
function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 ? maxNum : gcd(minNum, minNum % maxNum);


}
//최소 공배수
function ccd(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
console.log(abc(3,12));