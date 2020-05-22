function solution(arr, divisor) {
  var answer = [];
  for(var i=0;i<arr.length;i++){
      if(arr[i] % divisor === 0) answer.push(arr[i]);
  }
  answer.sort(function(a,b){return a-b});
  if(answer.length === 0) answer.push(-1);
  return answer;
}

function solution(a,b){
  let res=[];
  for(let i=0;i<i.arr.length;i++){
    if(a[i]%b===0)res.push(i);
  }
  res.sort(function(a,b){return a-b});
  if(res.length === 0)res.push(-1);
  return res;
}

function solution(arr,divisor){
  let res =[];
  for(let i =0;i<arr.length;i++){
   if(arr[i] % divisor ===0){
       res.push(arr[i]);
   }
  }
  res.sort((a,b)=>a-b);
  if(res.length === 0){
  res.push(-1);    
  
  return res;
}
function solution(arr,divisor){
  let res=[];
  arr.map((item)=>{
    item % divisor ===0 && res.push(item);
  });
  return res.length ? res.sort((a,b)=>a-b):[-1];
}
