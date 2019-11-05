// let obj;
// const myProto={x:1};
// obj=Object.create(myProto);
// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj)===myProto);

// function Person(name){
//   this.name=name;
// }

// obj=Object.create(Person.prototype);
// obj.name='Lee';
// console.log(obj.name);
// console.log(Person.prototype=== Object.getPrototypeOf(obj));
// const person={
//   radius:5,
//   getDiameter(){
//     return 2*person.radius;

//   };
// }
// console.log(person.getDiameter());

// const Number = (function () {

//   function Number() {
//     this.numberArray = [];
//   }
//   Number.prototype.multipy = function (){

//     arr.forEach(function (item) {
//       this.numberArray.push(item ** item);
//     }, this);
//   }
//   return Number;
// }());

// const numbers = new Number();
// numbers.multipy([1, 2, 3]);
// console.log(numbers.numberArray);

const Numbers= (function(){

  function Numbers(){
    this.numberArray = [];
  }
  
  Numbers.prototype.multiply(arr)=function() {
    arr.forEach(function (item) {
      // 외부에서 this를 전달하지 않으면 this는 전역 객체를 가리킨다.
      this.numberArray.push(item * item);
    }, this); // forEach 메소드 내부에서 this로 사용될 객체를 전달
  }

  return Numbers;
}());

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray); // [1, 4, 9]




