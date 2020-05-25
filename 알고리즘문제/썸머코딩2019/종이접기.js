function solution(n) {
  let fold = [];
  for (let i = 0; i < n; i++) {
    let left = fold.slice();
    console.log(left)
    let right = fold.slice().reverse().map(v=>!v);
    console.log(right)

   fold = [].concat(left).concat([false]).concat(right);
  }
  console.log(fold);
  return fold.map(c => c ? 1 : 0)
}
console.log(solution(4))


//n = 1 [0];
//n = 2 [0,0,1];
//n = 3 [0,0,1,0,0,1,1];
//n = 4 [0,0,1,0,0,1,1,0,0,0,1,1,0,1,1];

// function solution(n){
//   let answer =[];
//   for(let i =0;i<n;i++){
//     let _answer = [...answer];
//     answer.push(0);
//     _answer.reverse().forEach(item => answer.push(item === 0 ? 1 : 0));
//     console.log(_answer)
//     console.log(answer);
//   }
//   return answer;
// }
function solution(n){
  let answer =[];
  for(let i =0;i<n;i++){
    let _answer=[...answer];
    answer.push(0);
    _answer.reverse().forEach(item => answer.push(item === 0 ? 1: 0));
  }
  return answer;
}


// console.log(solution(4));
//
function solution(n){
  let arr = [0];
  let di = false;
  for(let i =1;i< n;i++){
    const temp = [];
    for(let j = 0;j <= arr.length;j++){
      if(di === false){
        temp.push(0);
        di = true;
      }else{
        tmep.push(1);
        di= false;
      }
      if(j !== arr.length){
        temp.push(arr[j]);
      }
    }
    arr = temp;
  }
  return arr;
}
//
function solution(n){
  const answer =[0];
  if(n ===0 ){
    return answer;
  }
  let start ;
  for(let i =2;i <= n;i++){
    answer.push(0);
    start = answer.length -2;
    for(let j = start;j >= 0;j--){
      answer.push(answer[j] ? 0:1);
    }
  }
  return answer;
}
// console.log(solution(4));
// 

const reverse = (arr)=>{
  let reverseArr =[];
   for(let i = arr.elgnth -1;i>=0;i--){
     reverseArr.push(arr[i] === '0' ? '1' :'0');
   }
  return reverseArr;
}
function solution(n){
  let DP = [];
  DP[1] = '0';

  for(let i = 2;i <=n;i++){
    DP[I] = DP[i-1]+'0'+reverse(DP[i-1]).join('');
  }
  return DP[n].split('').map(a=> a/1);
}

// 
function solution(n){
  var answer =[];
  var symetry = [1,0];
  while(n>0){
    answer.push(0);
    for(var i = answer.length -2 ;i >= 0;i--){
      answer.push(symtry[answer[i]]);
    }
    n--;
  }
  return answer;
}