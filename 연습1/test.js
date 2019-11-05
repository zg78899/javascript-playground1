// var x = 1;
// var y = 2;

// var z = y;

// y = x;
// x = z;

// console.log(x, y); // 2 1
// var x = 2;
// var result = (x % 2) ? '홀수' : '짝수';
// console.log(result);
// 1에서 10까지, 홀수일때
// for (var i = 1; i <= 10; i++) {

//   if (i % 2) {
//     console.log(i);
//   }
//   console.log(i);
// }
// // 3의배수
// for (var i = 1; i <= 10; i++) {

//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// // 0부터 10미만까지 2의배수
// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }
// // 2의배수 이면서 3의배수
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }
// // 10부터 1까지
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }
// // 10부터 짝수
// for (var i = 10; i > 0; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// var result = '';

// for (var i = 1; i <= 5; i++) {

//   result += '*';
//   console.log(result)
// }


// var star = '';

// for (var i = 0; i < 5; i++) {
//   for (var j = 0; i < 5; j++) {

//     if (i >= j) {
//       star += '*';
//     } else {
//       star += '';
//     }
//   }
//   result += '\n';
// }
// console.log(result);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Person('jaehun', 'kim');
Person.getFullName = function () {
  return `${this.firstName}${this.lastName}`;
};
console.log(Person.getFullName);
