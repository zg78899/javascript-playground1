
//  console.log(solution("1924",2));
//  console.log(solution(1231234,2));
 console.log(solution("4177252841",4));

//  function solution(number,k){
//    let index = 0;
//    while(index < k){
//      for(let i = 0; i<number.length;i++){
//        if((number[i] < number[i+1]) ||
//        (number[i] === '0' || number[i+1] === '0')){
//          number = number.replace(number[i],'');
//          break;
//        }
//      }
//      index++;
//    }
//    return number;
//  }
function solution(numver,k){
  let stack = [];
  for(let i =0;i<number.length;i++){
    let c = number[i];
    while(k > 0 && number.length > 0 && satck[stack.length -1] < c){
      stack.pop();
      k--;
    }
    stack.push(c);
  }
  return stack.splice(number.length- k ,k).join('');
}



function solution(number,k){
 let index = 0;
 while(index < k){
   for(let i =0; i< number.length;i++){
     if((number[i] <number[i+1]) || (number[i] === '0' && number[i+1] == '0')){
       number = number.replace(number[i],'');
       break;
     }
   }
   index++;
 }
 return number;
}

function solution(number,k){
  let stack = [];
  let count = k;

  for(let i =0;i< number.lnegth;i++){
    const now = number[i];
    while(stack[stack.length -1] < now){
      stack.pop();
      count--;
      if(count === 0){
        return stack.join('') + number.slice(i);
      }
    }
    stack.push(now);
  }
  return stack.join('').slice(0, number.length - k);
}




function solution(number,k){
  let stack =[];
  let count = k;
  for(let i =0;i<number.length;i++){
    let now = number[i];
    console.log(now);
    while(stack[stack.length -1] < now){
      console.log(stack);
      stack.pop();
      count--;
      if(count === 0){
        return stack.join('') + number.slice(i);
      }
    }
    stack.push(now);
  }
  return stack.join('').slice(0,number.length -k);
}

function solution(number,k){
  let b = [];
  for(let i =0;i<number.length ;i++){
    var c = number[i];
    while(k > 0 && b[b.length - 1] < c && b.length >0){
      b.pop();
      k--;

    }
    b.push(c);
  }
  let answer =b.splice(b.length -k ,k).join('');
  return answer;

}

function solution(number,k){
  let b  =[];
  for(let i =0;i<number.length;i++){
    var c = number[i];
    while(k >0 && b.length > 0 && b[b.length -1] < b){
      b.pop();
      k--;
    }
    b.push(c);
  }
  let answer = b.splice(number.length - k,k).join('');
  return answer;
}