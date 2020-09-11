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

console.log(solution('1D2S#10S'));

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

function solution(dartResult){
  let nums=[];
  let count =0;
  for (let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i-1])){
       nums[count -1] = 10;
       
      }else {
        num.push(+s);
        count+=1;
      }
    }else if(/\[SDT]/.test(s)){
      nums[count-1 ] = Math.pow(nums[count -1],s === 'T'? 3:s ==='D'?2:1);
    }
    else{
      if(s === '*'){
        nums[count -1] =nums[count -1] *2;
        if(count >1){
          nums[count -2] = nums[count -2] *2;
        }
      }else{
        nums[count -1] = nums[count] * -1;
      }
        
    }
  }
  return nums,reduce((pre,cur)=>pre+cur,0);
}



function solution(dartResult){
  let nums=[];
  let count =0;
  for(let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i-1])){
        nums[count -1] = 10;
      }else{
        nums.push(+s);
        count+=1;
      }
      console.log(nums)
    }else if(/[SDT]/.test(s)){
      nums[count -1] = Math.pow(nums[count -1],s ==='T'?3:s === 'D'?2:1);
    }else{
      if(s === '*'){
        nums[count -1] = nums[count-1]*2;
        if(count >1){
          nums[count -2] = nums[count -2]*2;
        }
      }else{
        nums[count -1] = nums[count -1] *-1;
      }
    } 
  }
  console.log(nums);
  console.log
  return nums.reduce((pre,cur)=>pre+cur,0);
}

function solution(dartResult){

  const bonus = {'S':1,'D':2,'T':3};
  let dart = dartResult.match(/\\d.?\\D/g);
  for(let i = 0;i<dart.length;i++){
    let split = dart[i].match((/(\\d{1,})([SDT])([*#])?/),
    score = Math.pow(split[1],bonus[split[2]]))
    if(split[3] === undefined){
      if(split[3] === '*'){
        score *= 2;
        if(i >0){
          dart[i-1] *= 2;
        }
      }else{
        score *=-1;
      }
    }
  }
  return dart.reduce((pre,cur)=>pre+cur,0);
}

function solution(ddartResult){
  var sdt=["S","D","T"];
  var stdn =[1,2,3];
  var opt =['*','#'];
  var arr=[];
  var num="";
  var t= dartResul.split("");
  for(let i =0;i<t.length;i++){
    if(isNaN(t[i])){// 숫자가 아닐때 
      if(opt.indexOf(t[i] === -1)){
        var tmp = Math.pow(parseInt(num), stdn[sdt.indexOf(t[i])]);
        arr.push(tmp);

      }else if(opt[1] === t[i]){
        var tmp = arr.pop()*-1;
        arr.push(tmp);

      }else{

        var t1= arr.pop()*2;
        var t2 = arr.pop()*2;
        if(t2){
          arr.push(t2);
        }
        arr.push(t1);
      }
      num ="";
    }else{//숫자 일때
      num += t[i];
    }
  }
  return arr.reduce((a,b)=>a+b);
}

function solution(dartResult){
  var res =[];
var match =dartResult.match(/(?:\\d+)|\\w |[#*]/g);
for(var i =0;i<dartResult.length;i++){
  switch(match[i]){
    case 'S' :break;
    case 'D' :res[res.length -1] *= res[res.length -1];break;
    case 'T' :res[res.length -1] =Math.pow(res[res.length -1],3);break;
    case '*' :
      if(res,length >1){
        res[res.length - 1]*=2;
        break;
      }
    case '#':
      res[res.length -1]*= -1;
      break;
      default:
      res.push(match[i]*1);   
  }
}
return res.reduce((a,b)=>a+b);
}


function solution(dartResult){
  var res =[];
  var map={"S":1,"D":2,"T":3};
  var dart =dartResult.match(/(?:\\d+\\w)|([*#])/g);
  for(var i =0;i<dartResult.length;i++){
    if(dart[i] === "*"){
      res[res.lelngth -1] *=2;
      if(res,length >1){
        res[length -2] *= res[res.length -2];
      } 
    }else if (dart[i] === "#"){
      res[res.length -1] *=-1;
    }else {
      res.push(Math.pow(dart[i].slice(0,-1),map(dart.slice(-1))))
    }
  }
  return res.reduce((a,b)=>a+b);
}

function solution(dartResult){
  let nums =[];
  let count = 0 ;

  for(let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i -1])){
        nums[count -1] = 10;
      }else {
        nums.push(+s);
        count+=1;
      }
    }else if(/[SDT]/.test(s)){
      nums[count-1] = Math.pow(
        nums[count -1], s === 'D' ? s: s === 'T'? 3:1
      )
    }else { 
      if(s === "*"){
        nums[count -1] *= 2;
        if(count > 1){
          nums[count -2] *= 2;

        }
      }else {
        nums[count -1] *= 1;
      }
    }
  }
  return nums.reduce((total,cur)=>total+cur);
}

function solution(dartResult){
  let nums = [];
  let count = 0;
  for(let i=0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i-1])){
        nums[count -1] = 10;
      }else{
        nums.push(+s);
        count+=1;
      }
    }else if(/[SDT]/.test(s)){
      nums[count -1] = Math.pow(
        nums[count -1],s === 'D'? 2:s === 'T'?3:1
      );
    }else{
      if(s === '*'){
        nums[count -1] *= 2;
        if(count >1){
          nums[count -2] *= 2;
        }
      }else{
        nums[count -1] *= 1;
      }
    }
  }
  return nums.reduce((total,cur)=>total+cur);
}

function solution(dartResult){
  let nums = [];
  let count = 0;
  for(let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/.test(dartResult[i-1])){
        nums[count - 1] = 10;
      }else{
        nums.push(+s);
        count+=1;
      }
    }else if(/[SDT]/.test(s)){
      nums[count - 1] = Math.pow(nums[count - 1],s === 'D'?2:s === 'T' ? 3:1;)
    }else{
      if(s === '*'){
        nums[count - 1] *=2 ;
        if(count >1){
          nums[count -2] *= 2;
        }
      }else{
        nums[count - 1] *= -1;
      }
    }
  }
  return nums.reduce((total,cur)=>total +cur ,0);
};


function solution(dartResult){
  let stack =[];
  let score = {S:1,D:2,T:3}
  let count = 0;
  const len = dartResult.length;

  for(let i =0;i<len;i++){
    let data = dartResult.charAt(i);
    if(+data !== data){//문자열이면
      if(score[data]){
        stack.push(Math.pow(dartResult.slice(i - count,i),score[data]));
        count = 0;
      }else {
        const invariable = data === '*'?2:-1;
        const length = stack.length;
        if(invariable === 2 && length >1){
          stack[length -2] = stack[length - 2] * invariable;
        }
        stack[length - 1] = stack[length -1] * invariable
      }
    }else{//숫자이면
      count++;
    }
  }
  return stack.reduce((scc,cur)=>scc+cur,0)
}

 function solution(dartResult){
   let stack = [];
   let score = {S:1,D:2,t:3};
   let count = 0;
   const len = dartResult.length;
   

   for(let i =0;i<len;i++){
     const data = dartResult.charAt(i);
     if(+data !== data){
       if(score[data]){
        stack.push(Math.pow(dartResult.slice(i-count,i),score[data]));
       }else{

         const invariable = data === '*' ? 2:-1;
         const length  = satck.length;
         if(invariable === 2 && length >1){
          stack[length -2] = stack[length - 2] * invariable;
         }
         stack[length - 1] =stack[length - 2] * invariable ;
       }
     }else{
       count++;
     }
   }
   return stack.reduce((acc,cur)=>acc+cur,0);
 };

 function solution(dartResult){
   let nums = [];
   let count = 0;
  for(let i =0;i<dartResult.length;i++){
    let s = dartResult[i];
    if(/\d/.test(s)){
      if(/\d/test(dartResult[i-1])){
        nums[count - 1] = 10;
      }else{
        nums.push(+s);
        count +=1;
      }
    }else if(/[SDT]/.test(s)){
      nums[count -1] = Math.pow(nums[count - 1],s==='D' ?2 :s==='T'?3:1)
    }
    else{
      if(s === '*'){
        nums[count -1] = nums[count -1]*2;
        if(count >1){
          nums[count - 2] = nums[count - 2] *2;
        }
      }else{
        nums[count -1] = nums[count -1] * -1;
      }
    }
  }
  return nums.reduce((acc,cur)=>acc+cur,0);
 }
function solution(dartResult){
  var sdt = ["S","D","T"];
  var stdn = [1,2,3];
  var opt  = ['*','#'];
  var arr = [];
  var num ="";
  var t = dartResult.split("");
  for(let i = 0;i <t.length;i++){
    if(isNaN(t[i])){
      if(opt.indexOf(t[i] === -1)){
        var temp = Math.pow(parseInt(num),stdn[sdt.indexOf(t[i])]);
      arr.push(temp);
      }else if(opt[1] === t[i]){
        var temp = arr.pop() * - 1;
        arr.push(temp)
      }else{
        var t1 = arr.pop() *2;
        var t2 = arr.pop() * 2;
        if(t2){
          arr.push(t2);
        }
        arr.push(t1)
      }
      num ="";
    }else{
      num +=t[i];
    }
  }
  return arr.reduce((acc,cur)=>acc+cur,0)
};

function solution(dartResult){
  let nums =[]
  let count = 0;
  for(let i =0;i<dartResult.length;i++){
   let s = dartResult[i];
   if(/\d/.test(s)){
     if(/\d/.test(dartResult[i-1])){
       nums[count - 1] = 10;
     }else{
       nums.push(+s);
       count +=1;
     }
   }else if(/[SDT]/.test(s)){
     nums[count - 1] = Math.pow(nums[count - 1],s === 'D' ?2:s==='T'?3:1);
   }else{
     if(s === '*'){
       nums[count - 1] *=2;
       if(count >1){
         nums[count - 1] *= 2;
       }
     }else{
       nums[count - 1] *= -1
     }
   }
  }
  return nums.reduce((acc,cur))=>acc+cur,0);

}

function solution(dartResult){
  let stack = [];
  let score = {S:1,D:2,T:3};
  let count = 0;
  const len = dartResult.length;
  
  for(let i =0;i<len;i++){
    let data = dartResult.charAt(i);
    if(+data !== data){
      if(score[data]){
        stack.push(Math.pow(dartResult.slice(i-count,i),score[data]));
        count = 0;
      }else{
        const invariable = data === '*'?2:-1;
        const length = stack.length;
      if(invariable === 2 && length >1){
        stack[length -2] = stack[length -2] *2
      }
      stack[length -1] = stack[length -1] * -1;
      }
    }else{
      count ++;
    }
  }
  return nums.reduce((acc,cur)=>acc+cur,0)
};


function solution(dartResult){
  let nums =[];
  let count = 0;
   for(let i =0;i<dartResult.length;i++){
     const s = dartResult[i];
     if(/\d/.test(s)){
       if(/\d/.test(dartResult[i-1])){
        nums[count -1 ] = 10;
       }else{
         nums.push(+s);
         count+=1;
       }
     }else if(/[SDT]/.test(s)){
       nums[count - 1] = Math.pow(nums[count - 1],s=== 'D'?2:s==='T'?3:1);
     }
     else{
       if(s === '*'){
        nums[count - 1] *= 2;
        if(count > 1){
          nums[count - 2] *=2; 
        }
       }else{
         nums[count - 1] *= -1;

       }
     }
     return nums.reduce((acc,cur)=>acc+cur,0);
   }
}