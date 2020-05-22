//사각형의개수를 구하는 공식
// w * h  - (w + h - gcd(w,h))
function solution(w,h){
  return w*h -(w+h -gcd(w,h));
}
function gcd(a,b){
let gcd = calcGcd(a,b);
return gcd;
}
function calcGcd(a,b){
  if(b === 0)return a;
  return a>b ? calcGcd(b, a % b) : calcGcd(a, b % a);
};

///다른사람의 코드

function solution(w,h){
  const gcd = (a,b)=>{
    return b ===0 ? a : gcd(b, a % b);
  }
  return w * h - (w + h - gcd(w, h));
};

//다른사람의 코드
function solution(w,h){
  var answer = 1;
  var gcd = 1;
}
var min = Math.min(w,h);
for(var i =min;i>0;i--){
  if((w%i === 0) && (h % i === 0)){
    gcd = i;
    break;
  }
}
asnwer = w*h - (w*h-gcd);
return answer;

//다름사람의 코드
function gcd(a,b){
  let temp = 0;
  let n = 0;
  if(a<b){
    temp = a;
    a = b ;
    b = temp;
  }
  while(b!=0){
    n = a % b ;
    a = b;
    b = n;
  }
  return a;
}
function solution(w,h){
  return w * h - (w + h - gcd(w,h));
}
