// 16. 소수 찾기
// numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다.
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.
// 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.
// 소수(素數, prime number)는 2, 3, 5, 7, 11, 13, 17…과 같이 1과 자신 이외의 어떤 수로도 나눠지지 않는 1보다 큰 양의 정수이다.

function numberOfPrime(n) {
  let result = 0;
  let arr = [];
  for (let i = 2; i <= n; i++) {
    let devided = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        ++devided ;
      }
    }
    if (devided === 0) {
      arr.push(i);
    }
  }
  return result = arr.length;
}
console.log(numberOfPrime(10)); // 4


// function sleep(ms){
// return new Promise(resolve=>setTimeout(resolve,ms));

// };
// function makeError(){
//   await sleep(1000);
//   const error=new Error();
//   throw error;
// }
// async function process(){
//   try{
//     await makeError();


//   }catch(e){
//     console.error(e)
//   }
// }




function solution(n){
  let answer=0;
  let arr=[];
  for(let i =2;i<=n;i++){
    for(let j=2;j<i;j++){
      if(i % j ===0){
        if(!arr.includes(i)){
          arr.push(i);
        }
      }
    }
  }
  return n-1-arr.length;
}
console.log(solution(10));


function solution(n){
  const primes=[];
  for(let i=2;i<=n;i++){
    let isPrime = true;
    const sqrt = Math.sqrt(i);
    for(let j = 0 ;primes[j]<=sqrt;j++){
      if(i % primes[j] === 0){
        isPrime =false;
        break;
      }
    }
    if(isPrime){
      primes.push(i);
    }
  }
  return primes.length;
}
console.log(solution(10));



function solution(arr){
  const result = arr.reduce((pre,cur,i,{length})=>{
      return i = length -1 ? pre+cur/length : pre+cur;
  },0);
  return result;
}

function solution(number){
  return '*'.repeat(number.length -4)+number.slice(-4);
}

