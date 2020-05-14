function solution(answer){
let list = [
  [1,2,3,4,5],
  [2,1,2,3,2,4,2,5],
  [3,3,1,1,2,2,4,4,5,5]
];
let count = [0,0,0];
for(let i =0;i<answer.length;i++){
  if(answer[i] === list[0][i % list[0].length]){
    count[0]++;
  }
  else if (answer[i] === list[1][i % list[1].length]){
    count[1]++;
  }else if(answer[i] === list[2][i % list[2].length]){
    count[2] ++;
  }
}
let res = [];
let max = Math.max(...count);
console.log(Math.max(...count));
for(let j =0;j<count.length;j++){
  if(max === count[j]){
    res.push(j+1);
  }
}
return res;


}
console.log(solutoin([1,2,3,4,5]))



function solution(answer){
  const list =[
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ];

  let count =[0,0,0];
  for(let i =0;i<answer.length;i++){
    if(answer[i] === list[0][i % list[0].length]){
        count[0]++;
    }
    if(answer[i] === list[1][i % list[1].length]){
      count[1]++;
    }if(answer[i] === list[2][i % list[2].length]){
      count[2]++;
    }
  }
  let res=[];
  let max = Math.max(...count);
  for(let j= 0;j<count.length;j++){
    if(max === count[j]){
      res.push(countj+1);
    }
    return res;
  }
}

function solution(answer){
  const list =[
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ];
  
  let count= [0,0,0];

  for(let i =0;i<answer.length;i++){
    if(answer[i] ===  list[0][i % list[0].length]){
      count[0]++;
    }if( answer[i] === laist[1][i % list[1].length]){
      count[1]++;

    }if( asnwer[i] === list[2][i % list[2].length]){
      count[2]++;
    }
  }
  let res =[];
  const max = Math.max(...count);
  for(let j =0;j<count.length;j++){
    if(max === count[j]){
      res.push(count[j+1]);
    }
  }
  return res;
}