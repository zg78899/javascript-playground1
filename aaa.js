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
// const bird = new Bird(1, 5);
// const animal = new Animal(2, 5);

// console.log(bird);
// console.log(animal);

// 슈퍼클래스
class Base {
  constructor() {
    console.log(new.target);
    console.log(this instanceof Base);
    console.log(this instanceof Object);
    console.log(this instanceof Derived);
  }
}
//서브 클래스
class Derived extends Base {
  // constructor(){super()}

}

const derived = new Derived();
const base=new Base();
//Derived타입이다.
