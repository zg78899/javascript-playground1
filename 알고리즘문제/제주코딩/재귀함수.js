function sum(n){
  if(n <=1){
    return 1;
  }
  return n + sum(n-1);
}

function factorial(fnum){
  let bnum = 1;
  if(fnum === bnum){
    return bnum;
  }
  else return fnum * factorial(fnum -1);
};
console.log(factorial(4));

function multiple(n){
  if(n <=1){
    return 1
  }
  return n * multiple(n-1);
};

// 반복문을 사용한 2진수 변한
let result = '';
let x = 11;
while(true){
  if(x % 2 === 0){
    result += '0'; 
  }else{
    result += '1';
  }
  x = Math.floor(x/2);
  if(x === 0 || x ===1){
    result += String(x);
    break;
  }
  return result.split('').reverse().join('');
}


//재귀함수를 사용한 2진수 변환
function 이진법(숫자){
  if(숫자 ===1 || 숫자 === 0){
    return String(숫자);
  }
  return String(숫자 % 2)+이진법(Math.floor(숫자))
}
//재귀함수를 이용한 문자열 뒤집기





let result = '';
let x = 'kimjaehun';

while(true){
  if(x.length === 1){
    result += x;
    break;
  }
  let y = s.split('')
  result += String(y.pop());
  x = y.join('');
}
function 문자열역순(문자){
  if(문자.lengthh === 1){
    return 문자;
  }
  return 문자열역순(문자.slice(0,문자.length -1))+문자[문자.length -1];//정순의 결과
  // return 문자[문자.length -1] + 문자열역순(문자.slice(0,문자.length -1);//역순
}

function 문자열역순(문자){
  if(문자.length === 1){
    return 문자
  }
  return 문자열역순(문자.slice(0,문자.length-1))+문자[문자.length - 1]
}


let result = 0;
let x = '123123';
while(true){
  if(x.length ===1){
    result += parseInt(x,10);
    break;
  }
  let y = x.split('');
  result += parseInt(y.pop(),10);
  x = y.join('');
}



function 자리숫자합(숫자){
  if(숫자.length ===1){
    return 숫자;
  }
  return parseInt(숫자[숫자.length -1]) +parseInt(자릿수의합(숫자.slice(0,숫자.length -1)))
}

function 자리의합(숫자){
  if(숫자.length === 1){
    return 숫자;
  }
  return parseInt(숫자[숫자.length -1],10) + parseInt(자리의합(숫자.slice(0,숫자.length -1)),10);

}

let a = 1;
let b = 1;
for(let i =0 ;i<6;i++){
  let c = a+b;
  a = b;
  b = c
}


 function gcdlcm(a,b){
const gcd = calcGcd(a,b);
const lcm  = (a*b)/gcd;

return [gcd,lcm];

 }
 function calcGcd(a,b){
   if(b === 0) return a;
   return a>b ? calcGcd(b,a%b):calcGcd(a,b%a)
 }





 