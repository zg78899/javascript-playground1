function waterMelon(n) {
  let answer = " ";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }
  return answer;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));