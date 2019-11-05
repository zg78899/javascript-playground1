// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// const result = values.reduce((pre, cur, i, self) => {
//   if (self.indexOf(cur) === i) pre.push(cur);
//   console.log(self.indexOf(cur));
//   return pre;
// }, []);
// console.log(result);

// cvar 
// var Person = (function () {
//   var _name = '';
//   function Person(name) {
//     _name = name;
//   }
//   Person.prototype.sayHi = function () {
//     console.log('Hi my name is ' +  _name);

//   };
//   return Person;
// }());
// var me = new Person('Lee');
// console.log(me);
// console.log(me.sayHi());
// 
// class Person{
//   #name='';
//   constructor(){
//     this.#name=name;
//   }
// }
// const me=new Person('Lee');
// console.log(me.#name);
class MyMath{
  static Pi=22/7;
  static #num=10;
  
  static increment(){

    return ++MyMath.#num;
  }
}
console.log(MyMath.Pi);
console.log(MyMath.increment());

