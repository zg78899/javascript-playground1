
// const http = require('http');

// http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello Wolrd');
// }).listen(3000);
// // eslint-disable-next-line no-console
// console.log('Server running at http://127.0.0.1:3000/');
// 
// 
class Base {

}

class Derived extends Base {
  constructor() {
    super();
    this.a = 1;
  }

}
const derived = new Derived(1, 2);
console.log(derived);

// class Base{
//   constructor(a,b){
//     this.a=a;
//     this.b=b;
//   }
// }
// class Derived extends Base{
//   constructor(a,b,c){
//     super(a,b);
//     this.c=c;

//   }
// }
// const derived=new Derived(1,2,3);
// console.log(derived);
class Base{
  constructor(){
    this,name=name;
  }
  sayHi(){
    return `Hi ${this.name}`;
  }
}
class Derived extends Base{
  sayHi(){
    return `${super.sayHi()}.how are you doing`;

  }
}
const derived=new Derived('Lee');
conseole.log(derived.sayHi());

// class Base{
//   constructor(name){
// this.name=name;
//   }
//   sayHi(){
//     return `Hi ${this.name}`;
//   }
// }
// class Derived extends Base{
//   sayHi(){
//     const __super=Object.getPrototypeOf(Derived.prototype);
//     return `${__super.sayHi.call(this)} how are you doing?`;
//   }
// }
class Rectangle{
  constructor(width,height){
    this.width=width;
    this.heigth=height;
  }
  getArea(){
    return this.width * this.height;
  }
  tostring(){
    return `width = ${this.width},height=${this.height}`;

  }
}
class ColorRectangle extends Rectangle{
  constructor(width,height,color){
    super(width,height);
    this.color=color;
  }
  tostring(){
    return super.tostring+`,color=${this.color}`;
  }
}
const colorRectangle=new ColorRectangle(2,4,'red');
console.log(colorRectangle);
console.log(colorRectangle.tostring());
console.log(colorRectangle.getArea());

class MyArray extends Array{
  uniq(){
    return this.filter((v,i,self)=>self.indexOf(v)===i);
  }
  average(){
    return this.reduce((pre,cur)=>pre+cur)/this.length;
  }
}
const myArray=new MyArray(1,1,2,3);
console.log(myArray);
console.log(myArray.uniq());
console.log(myArray.average());