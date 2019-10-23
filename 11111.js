// const person = { name: 'lee' };
// console.log(Object.getPrototypeOf(person) === Object.prototype);
// 

const Person = (function () {
  let _name = '';

  function Person(name) {
    _name = name; //초기화 한다.
  }
  Person.prototype.sayHi = function () {
    console.log(`hi my name i ${_name}`);
  };

  return Person;
}());
const me = new Person('lee');
console.log(me);
me.sayHi();//프로토 타입 객체가 안 죽었기 때문

const Person=(function(){
 let _name='';
 function Person(name){
   this.name=name;
 }
 Person.prototype.sayHi=function(){
   console.log(`Hi my name is ${_name}`);
   
 };

return Person;

}());
const me=new Person('lee');
console.log(me);
me.sayHi();

