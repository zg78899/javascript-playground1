// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() { return 'eat'; }

//   move() { return 'move'; }
// }

// class Bird extends Animal {
//   fly() { return 'fly'; }
// }


// class Animal{
//   constructor(){
//     this.age=age;
//     this.weight=weight;

//   }
//   eat(){return 'eat'}
//   move(){return 'move'}
// }
// class Bird extends Animal{
//   fly(){return 'fly';}
// }

console.log(...[1, 2, 3]);
console.log([1, 2, 3]);
console.log('hello');

console.log(...new Map([['a', '1'], ['b', '2']]));
console.log(...new Map([['a', '1'], ['b', '2']]));
console.log(...new Set([1, 2, 3]))
console.log(...new Set(['a', '1'], ['b', '2']));

// console.log(...{ a: 1, b: 2 });

const arr = [1, 2, 3];
const maxValue = Math.max(...arr);
console.log(maxValue);

// const arr=[1,2.3]
// const list=...arr;
// console.log(list);

var arr1 = [1, 2].concat([3, 4]);

console.log(arr1);
const arr2 = [...[1, 2], 3, 4];
console.log(arr2)

const n = { a: 1, b: 2, ...{ x: 1, y: 2 } };
console.log(n);

function sum() {
  var args = Array.prototype.slice.apply(arguments);
  return args.reduce(function (pre, cur) {
    return pre + cur;
  }, 10);
}
console.log(sum(1, 2, 3, 4));


function sum() {
  const agrs2 = [...arguments];
  return agrs2.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}
console.log(sum(1, 2, 3, 4));


const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'Javascript', completed: false }
];

const [, { id }] = todos;
console.log(id);//