// const arr=[1];
// arr.length=5;
// console.log(arr.length);
// console.log(arr)
// console.log(Object.getOwnPropertyDescriptors(arr));
// const arr=new Array({});
// console.log(arr);
// console.log(arr.length);
// const arr=Array(1,2,3,4,5);
// console.log(arr);
// const arr=Array.of('string');
// console.log(arr);
// console.log(arr.length);

// const arr1=Array('string');
// console.log(arr1);
// console.log(arr1.length);

// const arr1=Array.from('Hello');
// console.log(arr1[0]);

// const arr2=Array({length:2,0:'a',1:'b'});
// console.log(arr2);


// const arr3=Array.from({length:5},function (v,i){return i;});
// console.log(arr3);
const arr = [1, 2, 3];

// 인수를 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr); // false

//이때 생성된 복사본은 얕은 복사(shallow copy)를 통해 생성된다.
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

// 앝은 복사(shallow copy)
const _todos = todos.slice();
console.log(_todos);
console.log(Object.getOwnPropertyDescriptors(_todos));

console.log(todos);
console.log(Object.getOwnPropertyDescriptors(todos));


// const _todos = [...todos];
console.log(_todos === todos); // false

// 배열의 요소는 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); //

