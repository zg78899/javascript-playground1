function solution(number, target) {
  var count = 0;
  function dfs(target, numbers, k) {
    if (k == number.length) {
      let sum = 0;
      for (var i = 0; i < number.length; i++) {
        sum += numbers[i];
      }
      if (sum == target) {
        answer++;
      } return;
    } else {
      numbers[k] *= 1;
      dfs(target, numbers, k + 1);

      numbers[k] *= -1;
      dfs(target, number, k + 1);
    }
  }
  dfs(target,numbers,0);
  return count;
}
console.log(solution([1, 1, 1, 1, 1], 3)); //5;