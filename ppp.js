// var arr = [];

// for (var i = 0; i < 5; i++) {
//   arr[i] = function () { // ①
//     return i;
//   };
// }

// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]()); // ②
// }

// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 카운트 상태를 유지하기 위한 자유 변수 counter을 기억하는 클로저다.

function makeCounter() {
  let counter = 0;
  return function (predicate) {
    counter = predicate(counter);
    return counter;
  };
}
function increase(n) {
  return ++n;
}
function decrease(n) {
  return --n;
}

const count = makeCounter();

console.log(count(increase)); // 2
console.log(count(decrease)); // -1
console.log(count(decrease)); // -1
console.log(count(decrease)); // -2


const numbers = [1, 2, 3];


// let pow=[];
// for(let i=0;i<numbers.length;i++){
//   pow.push(numbers[i] ** 2);
// }
// console.log(pow);

let pow=[];

numbers.forEach((item)=>pow.push(item ** 2));
console.log(pow);

const result=[1,2,3].forEach(console.log);
console.log(result);

[1,2,3].forEach(function(item){
  console.log(item)
})
