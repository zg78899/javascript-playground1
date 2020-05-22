function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) result += i;
  }
  return result;
}
solution(10);


function solution(n){
  let sum=0;
  for(let i =1;i<=n;i++){
    if(n%i=== 0)sum +=i
  }
  return sum;
}