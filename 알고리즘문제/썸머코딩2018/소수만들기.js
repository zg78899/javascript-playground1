function solution(nums) {
  let answer = 0;
  //1. 3자리 숫자 만들기
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log(i);
    for (let j = i + 1; j < len; j++) {
      console.log(j)
      for (let k = j + 1; k < len; k++) {
        console.log(k)
        const number = nums[i] + nums[j] + nums[k];

        console.log(number)
        console.log(nums[i])
        console.log(nums[j])
        console.log(nums[k])
        if (isPrime(number))
          answer++;
      }
    }
  }

  //2. 소수 판별(2~number까지 하나씩 비교)
  function isPrime(number) {
    if (number < 2) return true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  return answer;
}
function solutioin(nums){
  let answer=0;
  const len = nums.length;
  for(let i =0;i<len;i++){
    for(let j = i+1;j<len;j++){
      for(let k =j+1;k<len;k++){
        number = nums[i]+nums[j]+nums[k];
        if(isPrime(number)){
          answer++;
        }
      }
    }
  }
  return answer;
}

function isPrime(n){
  if(n < 2) return true;
  for(let i =2;i<n;i++){
    if(n % i ===0){
      return false;
    }
    return true;
  }
}

console.log(solution([1,2,3,4]));

//
function primeCheck(n){
  for(var i =2;i <n;i++){
    if(n % i === 0) return false;
  }
  return true;
}

function solution(nums){
  let answer = 0;
  const len = nums.lengtk;
  for(let i =0;i<len;i++){
    for(let j =i+1;j<len;j++){
      for(let k =j+1;k <len ;k++){
        const n = nums[i]+nums[j]+nums[k];
        if(primeCheck(n)){
          answer++;
        }
      }
    }
  }
  return answer;
}
//
