function solution(d,budget){

  let sum =0;
  let count=0;
  d.sort((a,b)=>a-b);
  for(let i =0;i<d.length;i++){
    count++;
    sum += d[i];
    if(sum > budget){
      count--;
    }
  }
  return count;
}

function solution(d,budget){
  
  
  const list = d.sort((a,b)=>a-b);
  let count =0;

  for(let i =0 ;i<list.length;i++){
    if(budget >= list[i]){
      budget -= list[i];
      count++;
    }
  }
  return count;
}