function solution(array){
  return array.filter((v,i,self)=>self.indexOf(v) === i);
}
function solution(array){
  return [...new Set(array)];
}
function solution(array){
  return array.filter((v,i,self)=>self.indexof(v) === i);
}
// 배열을 리턴한다.
 function solution(array){
   return [...new Set[array]];
   //Set은 중복을 허락하지않는 객체
 }
//
const set = new Set([1,2,3,4]);
set.forEach((v,v2,set)=>console.log(v,v2,set));
//

//
const set = new Set([1,2,,3,4]);
console.log(Symbol.iterator in set) //true;

for(const value of set){
  console.log(value)// 1 2 3 4
}
console.log([...set]); [1,2,3,4];

//교집합
Set.prototype.intersaction = function (set){
  const result = new Set();
  for(const value of set){
    if(this.has(value)) result.add(value);
  }
  return result;
}
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

setA.intersacton(setB);
//

Set.prototype.intercation = function (set){
  return new Set([...this].filter(v => set.has(v)));
};
const setA =new Set([1,2,3,4]);
const setB = new Set([2,4]);
//
Set.prototype.intersaction = function (set){
  return new Set([...this].filter(v=> set.has(v)));
}
const setA = new Set([1,2,3,4]);
const setB = new Set([3,4]);

Set.prototype.intersaction = function (set){
return new Set([...this].filter(v=>set.has(v)));
}
const setA = new Set([1,2,3,4]);
const setB  = new Set([2,4]);

setA.intersaction(setB);

//합집합
Set.prototype.union = function(set){
const result = new Set(this);

for(const value of set){
  result.add(value);
}
return result;
}

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);
console.log(setA.union(setB));
//

Set.union = function (set){
  return new Set([...this,...set]);
};
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);


//치집합
Set.prototype.differece = function (set){
  const result = new Set(this);
  for(const value of set){
  return result.delete(value);
  }
  return result;
}
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);
console.log(setA.difference(setB));
//
Set.prototype.differece  =  function (set){
  const result = new Set(this);
  for(const value of set){
     result.delete(value);
  }
  return result;
} 
//상위
Set.prototype.isSuperset = function (set){
  for(const value of subset){
    if(!this.has(value))return false;
  };
  return true;
}
// 

Set.prototype.isSuperset = function (set){
  const superArr = [...this];
  return [...subset].every(v => supersetArr.includes(v));
};

Set.prototype.isSuperset = function (set){
  const superArr = [...this];
  return [...superArr].every(v=> superArr.includes(v));

}
Set.prototype.isSuperset = function (set){
 const superArr = [...this];
 return [...superArr].every(v=> superArr.includes(set));
}
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);
//true;

Set.prototype.isSuperset = function (set){
  const superArr = [...this];
  return [...superArr].every(v=> superArr.includes(set));
}



function Circle(radius){
   this.raduis = radius;
   this.getArea = function (){
     return MATH.pi * this.radius ** 2;
   }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea)// false;

function Circle(radius){
  this.rsdius = radius;
  this.getArea = function (){
    return Math.PI * this.radius ** 2;
  }
}
const circle1 = new Ciircle(1);
const circle2 = new Circle(2);

function Circle(radius){
  this.radisu = radius;

  Circle.prototype.getArea = ()=>{
    return Math.PI * this.radius ** 2;
  }
}
//Circle생성자 힘스기 생성한 모든 인스턴스는 부모의 객체 역할을 하는 프로토 타입 Circle.prototype 로 부터 ㅎㄷㅅㅁㄱㄷㅁ 메소드르 상속받느낟. 
// 즉 , Circle 셍성지 힘스기 셍성하는 인스턴스는 하나의 getArea 메소드를 공유한다.

console.log(circle1.getArea === circle2.getArea); // true

function Cicle(radius){
this.radius = radius;
Circle.prototype.getArea = ()=>{
  return Math.PI * this.raidus ** 2;
}
}
const circl1 = new Circle(1);
const circle2 = new Circle(2);

const obj = Object.create(null);

console.log(obj.__proto__)// undefined
getPropertyOf();// __proto__대신
Object.setPrototypeOf() // 프롶토 타입 메소드를 교체하고 싶은 경우


const obj ={};// 객체리터럴
const add = function (a,b){return a+b}; //함수 리터럴
const arr = [1,2,3]; //배열리터럴
const regexr = /is/ig; // 정규표현식 리터럴

// 객체 리터럴로 생성한 객체와 생성자 함수를 ㅛ사용한 객체의 차이점
const obj = {x:1};
const obj = new obj();
obj.x =1;

function Person(name){
  this.name = name;

}
//프로토 타입 메소드
Person.prototype.sayHello = function (){
  console.log(`Hi! my name is ${this.name}`);

}
const me = new Person('kim');
console.log(me.hasOwnProperty('name')); // true;

Object.prototype.hasOwnProperty.call(me,'name';
)
//객체의 프로퍼티는 prototypre에서 검색
//식별자의 경우 스코프체인에서 검ㅅ개한다./

const Person =(function (){
//생성자함수
function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function (){
  console.log(`Hi! My name is ${this.name}`);
}
//생서자 함수를 반환
return Person;
}());
const me = new Person('Lee');

//인스턴스 메소드 
me.sayHello = function (){
  console.log(`Hey! My name is ${this.name}`);
};

//인스턴스 메소드가 호출된다.프로토 타입 메소드는 인스턴스 메소드에 의해 가려진다.
me.sayHello()

Person.prototype.sayHello = function (){
  console.log(`Hey ! my name is ${this.name}`);

}
me.sayHello();

delete Person.prototype.sayHello;
me.sayHello();

//생성자 함수에 의한 프로토 타입 교체

const Perosn = (function (){
  function Person(name){
    this.name = name;
  }
  Person.prototype={
    sayHello(){
      console.log(`Hello`)
    }
  }
  return Person;
}());
// 생성자 함수에 의한 프로토 타입을 교체를 하면 
//프로토 타입의 링크가 파괴가 된다.
console.log(me.constructor === Person)//false;
console.log(me.constructor === Object)//true;

const me = new Person('Lee');

const Perosn = (function (){
function Person(name){
this.name = name;
}
Person.prototype={
  //이를 바로 잡기 위해 contrucotr을 정의해준다.
  constructor:Person,
  sayHello(){

  }
}
return Person;
}());
const me = new Person('kim');


function Person(name){
  this.name = name;
}
const me = new Person('Lee');

const parent = {
  sayHello(){
    console.log(`Hi ${this.name}`);
  }
}
Object.setPrototypeOf(me,parent);
me.sayHello();

function Person(name){
  this.name = name;
}
const mw = new Person('kim');

const parent = {
  constructor:Person,
  sayHello(){
    console.log(`hi ${thi.name}`)
  }
}
Person.prototype = parent;

Object.setPrototypeOf(me,parent);
me.sayheelo();
console.log(Person.prototype === Object.getPrototypeOf(me)); // true


function instancof(instance,constructor){

  const prototype = Object.getPrototypeOf(instance);

  if(prototype === null) return false;
  return prototype === constructor.prototype || us
}

const myProto = {x:10};

const obj ={
  y:20,
  __proto__:myProto
}
const obj = Object.create(myProto,{y:{value:20}});

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true


function Person(name){
  this.name = name ;

}
Perosn.prototype.sayHello =()=>{
  console.log(`Hi! My name is ${this.name}`);
};
Person.staticProp = 'statc prop';
Person.staticMethod = function (){
  console.log('staticMethod')
};

const me = new Person('Lee');
Person.staticMethod(); //
me.staticMethod(); 

const Perosn ={
  name:'kim',
  address:'seoul'
}
for(const key in Person){
  console.log(`${key} : ${Person[key]}`);

}

const perosn ={
  name:'kim',
  address:'seoul',
  __proto__:{age:20}
};
for(const key in person){
  //객체 자신의 프로퍼티인지 확인한다.
  if(!person.getOwnproperty(key))continue;
  console.log(key)// name , address
}

const person ={
  name:'kim',
  address:'Seoul',
  __proto__:{age:20}
};

for(const key of person)continue;
console.log(key);

const person ={
  name:'Kim',
  address:'Seoul',
  __proto__:{age:20}
};
console.log(Object.keys(person)) // ['name','address'];
console.log(Object.values(person)) // ['Kim','Seoul'];
console.log(Object.entries(person)) //[['name','Kim'],['address','Seoul']];
console.log(Object.entries(person).forEach(([key,value]) => console.log(key,value)))
// name kim
// address Seoul