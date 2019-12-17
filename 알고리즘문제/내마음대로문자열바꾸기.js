function solution(strings, n) {
  return strings.sort(function(a,b){
   if(a[n]===b[n]){
     return (a>b)-(a<b);//1 일때 작은 순서로 나열
   }
   else return (a[n]>b[n])-(a[n]<b[n])
  })
}

solution(['sun', 'bed', 'car'],1);

// function solution(strings,n){
//   return strings.sort(a,b){ a[n]===b[n]?a.localeCompare(b):a[n].localeCompare(b[n])};
//1 일때 작은 순서로 나열,-1일 때 큰순서로 ,0일 때 순서 그대로
// }