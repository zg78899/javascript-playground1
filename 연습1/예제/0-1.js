function solution(array) {
  const answer = [];
  let min;
  let max;
  for (let i = 0; i < array.length; i++) {
    min = Math.min(...array);
    max = Math.max(...array)
    const zeroOne = ((array[i] - min) / (max - min));
    
    answer.push(zeroOne.toFixed(3));
  }
  return answer.join(',');
}

console.log(solution([10, 20, 30, 40, 50, 60, 70, 80]))
