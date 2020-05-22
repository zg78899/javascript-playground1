// 17. 피보나치 수
// 피보나치 수는 0과 1로 시작하며,
//  다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…
// 2 
// 이상의 n이 입력되었을 때,
//  n번째 피보나치 수를 반환하는 fibonacci 함수를 작성하라. 예를 들어 n = 3이라면 2를 반환한다.

// function fibonacci(n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          value: cur,
          done: cur >= max
        };
      }
    };
  }
};
for (const num of fibonacci) {
  console.log(num);
}


const fibonacci={
  [Symbol.iterator](){
    let [pre,cur]=[0,1];
    const max=10;

    return {
      next(){
        [pre,cur]=[cur,pre+cur];
        return {
          value:cur,
          done:cur>=max
        };
      }
    };
  }
};
const fibonacci={
  [Symbol.iterator](){
    let[pre,cur]=[0,1];
    const max=10;
    return {
      next(){
        [pre,cur]=[cur,pre+cur];
        return {
          value:cur,
          done:cur>=max
        };
      }
    };
  }
};
const fibonacci={
  [Sysmbol.iterator](){
    let [pre,cur]=[0,1];
    const max=10;
    return {
      next(){
        [pre,cur]=[cur,pre+cur];
        return{
          value:cur,
          done:cur>=max;
        }
      }
    }
  }
}

const fibonacci={
  [Symbol.iterator](){
    let [pre,cur]=[0,1];
    const max=10;
    return{
      next(){
        [pre,cur]=[cur,pre+cur];
        return{
          value:cur,
          done:cur>=max
        };
      }
    };
  }
};

const fibonacci={
  [Sysmbol.iterator](){
    let [pre,cur]=[0,1];
    const mx=10;
    return{
      next(){
        [pre,cur]=[cur,pre+cur];
        return {
          value:cur,
          done:cur>=max;
        }
      }
    }
  }
}
function fibonacci(n){
  if(n<2)return n;
  return fibonacci(n-1)+fibonacci(n-2);
}