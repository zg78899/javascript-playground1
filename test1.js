// var star = '';
// var line = 5;
// for (var i = 0; i < line; i++) {
//   star += '*';
//   console.log(star);
// }

const person = {
  name: 'Lee',
  address: 'Seoul',
  __proto__: { age: 20 }
};
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// console.log(Object.keys(person));

function getCount8() {
  let num = 0;
  
  for (let i = 1; i <= 10000; i++) {
    const strNum = i + ' ';
    console.log(strNum);

    for (let j = 0; j < strNum.length; j++) {
      if (strNum.charAt(i) === 8) {
        num += 1;
      }
    }
  }
}
console.log(getCount8());


function evenOrOdd(num) {
if(num%2==0){
  return 'Even';
}
else{
  return 'Odd';
}

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {

return ((num%2===0) ?'Even': 'Odd');
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Eve