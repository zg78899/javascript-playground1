function solution(N,stage){
  let arr = [];
  let answer = [];
   var count = 0;
   let failrate = 0;
   let length = stage.length - count;
   for(let i =1;i<=N;i++){
     count = stage.filter(c=>c === i).length;
     if(i === 1){
       failrate = count/length;
       length -= count;
     }
     else{
       failrate = count/length;
       length -=count;
     }
     arr.push({
       str:i,
       rate:failrate
     });
   }
   arr.sort((a,b)=>{
     if(a.rate === b.rate){
       return a.str - b.str;
     };
     return b.rate - a.rate;
   });

   arr.forEach((item)=>{
     answer.push(item.str)
   });
  return answer;
}
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));

function solution(N,stage){
  var answer = [];
  var arr = [];
  for(let i =1;i<=N;i++){
    let top =0;
    let bottom = 0;
    for(let j =0;j<stage.length;j++){
      if(stage[j] === i){
        top++;
        bottom++;
      }
      else if(stage[j] > i){
        bottom++;
      }
    }
    arr.push({
      str:i,
      rate: top ===0 || bottom === 0 ? 0 :top/bottom;
    });
  }
  arr.sort((a,b)=>{
    if(a.rate === b.rate){
      return a.str - b.str;
    }
  return b.rate - a.rate;
  });

 for(let i =0;i<arr.length;i++){
   answer.push(arr[i].str);
 };
 return answer;
}