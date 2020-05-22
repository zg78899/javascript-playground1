//탐욕 알고리즘 - 매 순간의 최적의 해를 도출하는 알고리즘

function getChange(value){
  let change = [10000,5000,1000,500,100,50,10];
  let won = Math.floor(value /10)*10;
  let i =0;
  let counts =[];
  
  while(true){
    if(won >= change[i]){
      let count = Math.floor(won /change[i]);
      won = won - change[i] * count;
      counts[i] = count;

    }else {
      counts[i] = 0;
    }
    i++;
    if(won === 0){
      for(let j =0;j<change.length -i ;j++){
        counts.push(0);
      }
      break;
    }
  }
  change.map((change,index)=>{
    console.log(`${change.toLocaleString()}원 ${counts(index)}개`)
  })
}


function solution (n,lost,reserve){

  let student = Array(n).fill(1);

  for(let i=0;i<lost.length;i++){
    const index = lost[i]-1;
    student[index] -=1;
  }
  for(let i=0;i<reserve.length;i++){
    const index = reserve[i] -1;
    student[index] +=1;
  }

  for(let i=0;i<student.length;i++){
    if(i !== 0 && student[i] === 0) {
      if(student [i-1] === 2){
        student[i-1]--;
        student[i]++;
        
        continue;
      }
    }
      if(i != student.length -1 && student[i] ===0){
        if(student[i+1] === 2){
          student[i+1]--;
          student[i]++;
        }
      }
    }
    return student.filter(i=>i >=1).length;
  }

  function solution(n,lost,reserve){
    let student = Array(n).fill(1);

    for(let i =0;i<lost.length;i++){
      const index = lost[i] -1;
      srtudent[index] -=1;
    }
    for(let i =0;i<reserve.length;i++){
      const index = reserve[i]-1
      student[index] -=1;
    }
    for(let i =0;i<student.length;i++){
      if(i !== 0 && student[i] === 0){
        if(student[i-1] === 2){
          student[i-1]--;
          student[i]++;

          continue;
        }
      }
      if(i !=== student.length -1 && student[i] ===0){
        if(student[i+1] === 2){
          student[i+1]--;
          student[i]++;
        }
      }
    }
    return student.filter(i=>i>=1).length;
  }

function solution(n,lost,reserve){

  let student = Array(n).fill(1);

  for(let i =0;i<lost.length;i++){
    const index = lost[i] -1;
    console.log(student[index] -=1);
  }
  for(let i =0;i<reserve.length;i++){
    const index = reserve[i] -1;
    student[index] +=1;
  };
  for(let i =0;i<student.length;i++){
    if(i !== 0 && student[i-1] ===2){
      student[i-1]--;
      student[i]++;
      continue;
    }
    if(i !=== student.length -1 && student[i+1] ===2){
      student[i+1] --;
      student[i]++;
    }
  }
  return student.filter(i=>i>=1).length;
}

function getChange(value){

  let change = [50000,10000,5000,1000,500,100,50,10];
  let won = Math.floor(value  / 10) *10;
  let i =0;
  let counts =[];

  while(true){
    if(won >= change[i]){
      let count =Math.floor(won /change[i]);
      won = won - change[i] * count;
      counts[i] = count;
    }
    else{
      counts[i] === 0;
    }
    i++;
    if(won === 0){
      for(let j =0;j<change.length - i ; j++){
        counts.push(0);
      }
      break;
    }
  }
  change.map((change,index)=>{
    console.log(`${change.toLocaleString()}원 ${counts[index]}개`)
  })
}

function getChange(value){
  let change = [50000,10000,5000,1000,500,100,50,10];
  let won = Math.floor(value / 10) *10;
  let i =0;
  let counts = [];

  while(true){
    if(won >= change[i]){
      let count = Math.floor( won /change[i]);
      won = won - change[i] *count;
      counts[i]= count;

    }else{
      counts[i] = 0;
    }
    i++;
    if(won === 0){
      for(let j =0;j<counts.length;j++){
        counts.push(0);
      }
      reak;
    }
  }
  change.map((change,index)=>{
    console.log(`${change.toLocaleString()}원 ${counts[index]}개`)
  })
}

function getChange(value){
  let change = [50000,10000,5000,1000,500,100,50,10];
  let won = Math.floor(value /10 )*10;
  let i = 0;
  let conts =[];

  while(true){
    if(won >= change[i]){
      let count = Math.floor(won / change [i])
        won = won - change[i] * count;
        counts[i] = count;
      
    }else{
      counts[i] = 0;
    }
    i++;
    if(won === 0 ){
      for(let j =0;j<change.length;j++){
        counts.push0(0);
      }
      break;
    }
  }
  change.map((cahnge,index)=>{
    console.log(`${cahnge.toLocaleString()}원 ${counts[index]}개`);
  })
}


function solution(n,lost,reserve){

  let student = Array(n).fill(1);

  for(let i =0;i<lost.length;i++){
    const index = lost[i] - 1;
    student[index] -=1;  
  }
  for(let i = 0;i<reserve.length;i++){
    const index = reserve[i] -1;
    student[index] +=1;
  }
  for(let i =0; i< student.length;i++){
   if(i !== 0 && student[i] === 0){
    if(student[i-1] === 2){
      student[i-1]--;
      student[i]++;
      continue;
    }
   }
   if(i !== student.length -1 && student[i] === 0){
      if(stdeutn[i+1] ===2){
        student[i+1]--;
        stdeunt[i]++;
      }
   } 
  }
    return student.filter(i=>i>=0).length;
}