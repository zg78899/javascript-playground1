// 18. 각 자릿수의 합 구하기
// 정수 n이 주어지면, n의 각 자릿수의 합을 구해서 반환하는 digitSum 함수를 완성하라.
//  예를 들어 n = 123이면 1 + 2 + 3 = 6을 반환한다. 단, n은 100,000,000 이하의 정수로 한다.
function digitSum(n) {
  let result = 0;
  while (n > 0) {
    if (n > 10000000) return false;

    result += (n % 10);
    n = parseInt(n / 10);
  }
  return result;
}

console.log(digitSum(123));  // 6
console.log(digitSum(987));  // 24
console.log(digitSum(100000001));  // false

