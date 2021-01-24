// let i = 0;
// while(i < 3){
//   console.log(i);
//   i+=1;
// };
// let i =3 ;
// while(i) alert(i--);
// let i = 0;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 3);

// let sum  = 0;
// while(true){
// let value = +prompt('숫자를 입력하세요!');
// if(!value) break;
// sum += value;

// // return sum illegal return
// };
// console.log(sum);

//오직 숫자 100  이상만 입력하도록
// while (true) {
//   let value = +prompt("100 보다 큰 숫자를 입력하세요");
//   if (value > 100 || !value || value === "") break;
// }

// let num;
// do {
//   num = prompt("100 넘는 숫자를 입력하세요!");
// } while (num < 100 && num);

// 소수 출력하기
// let num = 10;
// numberState:for(let i  = 2;i<=num;i++){
//   for(let j =2;j<i;j++){
//     if(i % j === 0) continue numberState;
//   }
//   alert(i) //2,3,5,7
// };

function isPrime(number) {}

function solution(n) {
  let arr = [];
  let result = 0;

  for (let i = 2; i <= n; i++) {
    let devided = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        devided++;
        console.log(devided);
      }
    }
    if (devided === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(solution(10));
