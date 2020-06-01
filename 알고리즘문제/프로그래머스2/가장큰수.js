// 내 풀이 오답임
function solution(numbers){
  let arr =[];
  var answer = numbers.map((v)=> ({
    value:v+'',
    rest:v % 10
  }));
  let list = answer.sort(compare('rest')).reverse();
  console.log(list)
  for(let i =0;i<list.length;i++){
   if(list[i].rest){
     arr.push(list[i].value)
   }
   else if(list[i].rest === 0){
     arr.push(list[i].value)
   }
  }
  return arr.join('')[0] === '0'? '0':arr.join('');
}

function compare(key){
  return (a,b)=> (a[key] < b[key])? -1 : a[key] > b[key] ? 1: 0;
}
console.log(solution([3, 30, 34, 5, 9]));


//
function solution(numbers){
  var asnwer = numbers.map(v=>v+'').sort((a,b)=> (b+a) - (a+b)).join('');
  return asnwer[0] === '0'? '0': asnwer;
}
// 
function solution(numbers){
  let answer = numbers.sort((a,b)=> `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0': answer;
};

//
const solution =(numbers)=>{
  numbers.reduce((a,b)=> a+b) === 0 ? '0': numbers.sort(compare).join('');
}
const comparse =(a,b)=>{
  return +(a+''+b) > +(b+''+a) ? -1:1;
}

//
function solution(numbers){
  const answer = numbers.sort((a,b)=>{
    a = a.toString();
    b = b.toString();
    return (b+a) - (a+b);
  }).join('');

  return answer[0] ==='0'? '0':answer;
};

const comparse = (a,b)=>{
  const stra = a.toString();
  const strb = b.toString();
  if(parseInt(stra+strb) > parseInt(strb+stra)){
    return -1;
  }else{
    return +1;
  }
};
function solution(numbers){
  if(numbers.reduce((a,c)=>{
    return a+c;
  },0) === 0){
    return '0'
  }
  return numbers.sort((compare)).join();
}