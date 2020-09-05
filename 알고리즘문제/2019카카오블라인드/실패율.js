function solution(N, stages) {
  let rates =[]
  let answer=[];
  let failRate =0;
  let count =0;
  let length = stages.length - count;
  for(let i =1;i<=N;i++){
       console.log(count = stages.filter(c => c === i).length);

      if(i === 1){
          failRate = count / length;
          length -= count;   
      }else{
        failRate = count /(length);
        length -= count;
      } 
    rates.push(
      {rate:failRate,
        stage:i
      });
  }
  
  rates.sort((a,b)=>{
    if(a.rate === b.rate){
      return a.stage - b.stage
    }
    return b.rate -a.rate;
  });


  for(let i=0;i<rates.length;i++){
     answer.push(rates[i].stage);
  };

  return answer;

}
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));