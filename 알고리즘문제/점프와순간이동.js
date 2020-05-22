function solution(n){
  let ans = 0;
  while(n !== 0){
    if(n % 2 === 0){
      n /= 2;
    }else{
      n -= 1;
      ams +=1;
    }
  }
  return ans;
}
console.log(solution(5))//return 2;
console.log(solution(6))//return 2
console.log(solution(500))//return 5;