function Person(name) {
  this.name = name;
}
const me = new Person('lee');

const parent = {
  constructor:Person,
  
  sayHello() {


      console.log(`Hi myy name is ${this.nae}`);
  }
};
Person.prototype = parent;

Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person);
console.log(me.constructor === Object);



