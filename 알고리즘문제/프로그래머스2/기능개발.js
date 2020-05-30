function solution(progresses, speeds){
var answer =[];
let deploylist = progresses.map((v,i)=>{
  return {
    progress:v,
    speed:speeds[i]
  }
})

while(deploylist.length > 0){
 deploylist = deploylist.map((item)=>{
   return {
     ...item,
     progress: item.progress+item.speed
   }
 });

 if(deploylist[0].progress >= 100){
   let count =0;
   for(let i =0;i<deploylist.length;i++){
     if(deploylist[i].prgress >=100){
       couunt++;
     }else{
       break;
     }
   }
   deploylist = deploylist.splice(count);
   answer.push(count);
 }
  
}
return answer;
}
console.log(solution([93,30,55],[1,30,5]))

//
function solution(progresses,speeds){
  var answer =[];
  while(speeds.length > 0){
    for(let i in speeds){
      if(progresses[i] < 100){
        progresses[i] += speeds[i]
      }
    }
    let deploy_count =0;
    while(progresses[0] >= 100){
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if(deploy_count > 0){
      answer.push(deploy_count);
    }
  }
  return answer;
}
//
function solution(progresses,speeds){
  let answer =[0];
  let days = progresses.map((progress,index)=>{
    return Math.ceil((100 - progress) / speeds[index]);
  });
  let maxDays = days[0];

  for(let i =0,j=0;i<days.length;i++){
    if(days[i] <= maxDays){
      answer[j] += 1;
    }else{
      maxDays = days[i];
      answer[++j] = 1;
    }
  }
  return asnwer
}