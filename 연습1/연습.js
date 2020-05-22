
// function solution(d, budget) {
//   let sum = 0;
//   let count = 0;
//   d.sort();
//   for (let i = 0; i < d.length; i++) {
//     count++;
//     sum += d[i];
//     if (sum > budget) {
//       count--;
//       break;
//     }
//   }
//   return count;
// }
function solution(d,budget){
 const list = d.sort();
 let count = 0;
 let sum =0;
 for(let i =0;i<list.length;i++){
   count++;
   sum += list[i];
   if(budget <= sum ){
     count--;
     console.log(count);
     break;
   }
   
 }
 return count;
}
console.log(solution([1,3,2,5,4],9))

// const done = true;
// let message = '';

// if(done){
//   message = '완료';
// }else{
//   message ='미완료';
// }

// const done = true;
// let message = '';

// message = done ? '완료 ':'미완료'

// const elem = null;

// const value = elem.value; //error
// const value = elem && elem.value // error가 나지않는다.

// function getStringLength(str){
//   str = str || '';
//   return str.length;
// }
// getStringLength();
// getStringLength('hi');

// //ES6 매개변수의 기본값
// function getStringLength1(str = 'hi'){
//   str = str || '';
//   return str.length;
// }
// console.log(getStringLength1())
