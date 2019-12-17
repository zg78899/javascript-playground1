function solution(strings, n) {

  return strings.sort(function(a,b){
   if(a[n]===b[n]){
     return (a>b)-(a<b);
   }
   else return (a[n]>b[n])-(a[n]<b[n])
  })
}

solution(['sun', 'bed', 'car'],1);

// function solution(strings,n){
//   return strings.sort(a,b){ a[n]===b[n]?a.localeCompare(b):a[n].localeCompare(b[n])};
// }