function solution(a, b) {
  let sum = 0;
 
  for(let i =a; i<=b; i++){
     
      sum+=i
  }
  if(a>b){
      for(let i=a;i>=b;i--){
          sum+=i
      }
  }
  return sum;
}
function solution(a,b){
  let sum=0;
  for(let i =Math.min(a,b);i<=Math.max(a,b);i++)sum+=i;
  return sum;
};
console.log(solution(3,5));
console.log(solution(3,3));
console.log(solution(5,3));