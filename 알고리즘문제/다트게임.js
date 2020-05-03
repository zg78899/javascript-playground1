function solution(dartResult){
  let answer =0;
//  for(let i =0;i<dartResult.length;i++){
//    let s = dartResult[i];
//    console.log(/\d/.test(s));

//  }
 

}
console.log(solution('1D2S#10S'));



function solution(dartResult){
  let nums=[];
  let count =0;

  for(let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i-1])){
        nums[count -1] =10;
      }else{
        nums.push(+s);
        count+=1;
      }
    }else if(/[SDT]/.test(s)){
      nums[count-1] = Math.pow(
        nums[count -1], s === 'D' ? 2: s === 'T'?3:1
      );
    }else {
      if(s === '*'){
        nums[count -1] *= 2;
        if(count >1){
          nums[count -2] *=2;
        }
      }else{
        nums[count -1] *=-1;
      }
    }
  }
  return nums.reduce((total,cur)=>total+cur);
}


// function solution(dartResult){

//   let stack =[];
//   let score ={S:1,D:2,T:3};
//   let count =0;
//   const len = dartResult.length;

// for(let i=0;i<len;i++){
//   let data = dartResult.charAt(i);
//   console.log(dartResult.charAt(i));
//   console.log(+data)
//   if(+data !== data){
//     if(score[data]){
//       stack.push(Math.pow(dartResult.slice(i -count ,i),score[data]));
//       count =0;
//     }else {
//       const invariable = data === '*'? 2:-1;
//       const len = stack.length;
//       if(invariable === 2 && len >1){
//         stack[len -2] = stack[len -2] * invariable;
//       }
//         stack[len -1] = stack[len -1]* invariable;
//     }
//   }else{
//     count++;
//   }
// }
// return stack.reduce((scc,cur)=>scc+cur),0;
// }