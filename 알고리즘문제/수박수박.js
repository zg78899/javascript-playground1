function solution(n){
  let result='';
  for(let i=0;i<n;i++){
    if(i%2)result+='박';
    else result+='수';
  }
  return result;
}
console.log(solution(1));


