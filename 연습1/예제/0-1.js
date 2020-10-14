function solution() {
  const array = [10, 20, 30, 40, 50, 60, 70, 80];
  const answer = [];
  let min;
  let max;
  for (let i = 0; i < array.length; i++) {
    min = Math.min(...array);
    max = Math.max(...array)
    const zeroOne = Math.round((array[i] - min) / (max - min));
    answer.push(zeroOne);
  }
  return answer;
}

console.log(solution())
