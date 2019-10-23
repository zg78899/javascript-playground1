const Person = (function () {

  let _name = '';

  function Person(name) {
    _name = name;
  }
  Person.prototype.sayHi = function () {
    return console.log(`Hi my name is ${_name}`);

  };


  return Person;
}());
const me=new Person('lee');
me.sayHi();