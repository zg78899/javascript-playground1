// const numbers = [1, 2, 3];

// // forEach 메소드는 원본 배열(this)을 변경하지 않는다.
// // 하지만 콜백 함수가 원본 배열(this)을 변경할 수는 있다.
// // 원본 배열을 직접 변경하려면 콜백 함수의 3번째 인자(this)를 사용한다.
// numbers.forEach((item, index, self) =>

// self[index] = Math.pow(item, 2));

// console.log(numbers); // [1, 4, 9]

// if (!Array.prototype.forEach) {
//   Array.prototype.forEach = function (callback, thisArg) {
//     // 전달받은 첫번째 인수가 함수가 아니면 TypeError를 발생시킨다.
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }

//     // this로 사용할 두번째 인수가 전달받지 못하면 this로 전역 객체를 사용한다.
//     thisArg = thisArg || window;

//     // for 문으로 배열을 순회하면서 콜백 함수를 호출한다.
//     for (var i = 0; i < this.length; i++) {
//       // call 메소드를 통해 두번째 인수가 전달받은 this를 전달하면서 콜백 함수를 호출한다.
//       // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다.
//       callback.call(thisArg, this[i], i, this);
//     }
//   };
// }
const Numbers = (function () {

  function Numbers() {
    this.numberArray = [];
  }
  Numbers.prototype.multiply = function (arr) {
    arr.forEach(function (item) {
      // 외부에서 this를 전달하지 않으면 this는 전역 객체를 가리킨다.
      this.numberArray.push(item * item);
    }, this); // forEach 메소드 내부에서 this로 사용될 객체를 전달
  }
  return Numbers;
}());

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // 

const Numbers = (function () {
  function Numbers() {
    this.numberArray = [];
  }
  Numbers.prototype.multiply = function (arr) {
    arr.forEach(function (item) {
      // 외부에서 this를 전달하지 않으면 this는 전역 객체를 가리킨다.
      this.numberArray.push(item * item);
    }, this); // forEach 메소드 내부에서 this로 사용될 객체를 전달
  };
  return Numbers;
}());

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // [1, 4, 9]


const Prefixer = (function () {
  function Prefixer(prefix) {
    this.prefix = prefix;
  }
  Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    }, this);
  };
  return Prefixer;
}());
const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
Collapse


class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      // 일반 함수로 호출되는 콜백 함수 내부의 this는 전역 객체를 가리킨다.
      // TypeError: Cannot read property 'numberArray' of undefined
      this.numberArray.push(item * item);
    });
  }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);

class Numbers {

  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);

    });
  }
}
const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);

class Numbers {
  numberArray = [];

  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    });
  }
}
const numbers = new Number();
multiply([1, 2, 3]);
console.log(numbers.numberArray);

const Numbers = (function () {
  function Numbers() {
    this.numberArray = [];
  }

  Numbers.prototype.multiply = function (arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    });
  }
  return Number;
}());
const numbers = new Number();
multiply([1, 2, 3]);
console.log(numbers.numberArray);

let todos = [
  { id: 1, content: 'HTML' completed: false },
  { id: 1, content: 'HTML' completed: true },
  { id: 1, content: 'HTML' completed: false }
];

function getMaxId() {
  return Math.max(...todos.map(item)=> item.id));
  return Math.max.apply(null,todos.map(item))
}
console.log(getMaxId());

class Number{
  numberArray=[];

  multiply(arr){
  
    arr.forEach((item=>{
      this.numberArray.push(item*item);
    },this));
  }
}
const numbers=new Number();
multiply([1,2,3]);
console.log(numbers.numberArray);

 const Numbers=(function{
   function Numbers(){
     this.numberArray=[];
  } 
   Numbers.prototype.multiply=function(arr){
     arr.forEach(function(item){
      this.numberArray.push(item*item);
     },this);
   }
return Numbers;
 }());
 const numbers=new Numbers();
 multiply([1,2,3]);
 console.log(numbers.numberArray);

 const numbers=[1,4,9];
 
 const root=numbers.map(item=>Math.sqrt(item));

 console.log(root);
 console.log(numbers);


 const Prefixer=(function(){

   function Prefixer(prefix){
     this.prefix=prefix;
   }

   Prefixer.prototype.prefixArray=function(arr){
    return arr.map((item=>this.prefix+item);
   }
   
   return Prefixer;
 }());
 const pre=new Prefixer('web-kit');
 const preArr=pre.prefixArray(['linear-gradients','border-radius']);
 console.log(preArr);

 class Person{
   constructor(firstName,lastName){
     this.firstName=firstName;
     this.lastName=lastName;
   }
   get fullName(){
     return this.firstName+''+this.lastName;
   }
   set fullName(name){
     [this.firstName,this.lastName]=name.split('');
   }
 }
 const me=new Person('jaehun','kim');
console.log(`${me.firstName} ${me.lastName}`);

me.fullName='jaehun kim';
console.log(me);//setter

console.log(me.fullName);//getter

console.log(Object.getOwnPropertyDescriptor(Person.prototype,'fullName'));




