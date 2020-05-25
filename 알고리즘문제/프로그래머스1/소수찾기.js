function solution(n){
  let result =0;
  let count =0;
  for(let i =2;i <= n;i++){
    count =0;
    for(let j =0;j<=n;j++){
      if(i % j === 0){
        count++;
        console.log(count);
      }
      console.log(count)
    }
     console.log(count)
    if(count === 2){
      result++;
    }
  }
  return result;
}
console.log(solution(10));