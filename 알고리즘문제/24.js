// 24. 평균구하기
// 인수로 주어진 배열의 평균을 구하는 함수를 완성하라.

// function average(array) {
//   return array.reduce((pre, cur, i, self) => {
//     return pre + cur / self.length;
//   }, 0);
// }

// console.log(average([5, 3, 4])); // 4
function average(array) {
  return array.reduce((pre, cur, i, self) => {
    return i = self.length ? pre + cur / self.length : pre + cur;
  }, 0);
}

console.log(average([5, 3, 4])); // 4