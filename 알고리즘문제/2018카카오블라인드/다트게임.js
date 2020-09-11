function solution(dartResult){
  let count = 0;
  let num = [];
  for(let i =0;i<dartResult.length;i++){
   let s = dartResult[i];
  // 숫자일때
   if(/\d/.test(s)){
    if(/\d/.test(dartResult[i-1])){
      nums[count - 1] = 10;
    }else{
      nums.push(+s);
      count++;
    }
   }else if(/[SDT]/.test(s)){
     nums[count - 1] = Math.pow(num[count - 1],s === 'D' ?2:s === 'T' ? 3:1);
   }
   else{
     if(s === '*'){
       nums[count -1] *= 2;
       if(count >1){
         nums[count - 2] *= 2;
       }
     }else{
      nums[count - 1] * -1;
     }
     
   }
  }
  return nums.reduce((acc,cur)=>acc+cur,0)
}