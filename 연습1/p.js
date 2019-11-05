function Person(name) {

  this.name = name;
}
Person.prototype.sayHello = function () {
  return console.log(`Hi My name is ${this.name}`);
};

const me = new Person('lee');

console.log(me.hasOwnProperty('name'));
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype)===Object.prototype);
console.log(Object.prototype.hasOwnProperty.call(me,'name'));
