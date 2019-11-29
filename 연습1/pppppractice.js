// 1. var
// - 런 타임 이전에 할당과 초기화가 이루어진다. (변수 호이스팅);
// - 함수 코드블럭 내부에서만 지역스코플 갖는다. (지역, 함수레벨 스코프);
// - 중복선언이 가능하다
// 2. let
// - 런 타임 이전에 선언만 이루어진다. 에러를 잡을 수 있다. TDZ (변수 호이스팅)
// - 함수 코드블럭 내부 뿐 아니라 모든 코드블럭에서 자신의 지역 스코프를 갖는다. (블록레벨 스코프))
// - 중복선언이 불가합니다.
// 3. const
// - 선언과 할당이 동시에 이루어져야 한다. (상수, 변수 호이스팅)
// - 함수 코드블럭 내부 뿐 아니라 모든 코드블럭에서 자신의 지역 스코프를 갖는다. (블록레벨 스코프)
// - 첫번째 이유 
// 호이스팅
// 1. 변수 호이스팅
// - 런 타임 이전에 선언과 초기화가 이루어진다. 이말은 코드 가장 상단으로 끌어올려진 것처럼 동작한다.
// 2. 함수 호이스팅
// - 런 타임 이전에 선언과 초기화와 할당이 다 이루어진다.
// 스코프
// 1. 전역 스코프
// - 코드 어디서든 참조가 가능하다.
// 2. 지역 스코프
// - 자신이 선언된 위치에서만 스코프를 갖는다.
// - 함수레벨 스코프
//    - 함수 코드블록 내부에서만 스코프를 갖는다. (var)
// - 블록레벨 스코프
//    - 모든 코드블록 내부에서 스코프를 갖는다. (let, const)
// 전역변수의 문제점
// 1. 생명주기가 길다.
// 2. 스코프체인의 종점에 존재한다.
// 3. 네임 스페이스의 오염(module)
// 4. 암묵적 결합
// 생성자 함수
// */
// 붕어빵 틀
function 붕어빵틀(재료) {
  this.가루 = '밀가루';
  this.속 = 재료; 
}
const 크림붕어빵 = new 붕어빵틀('크림');
const 고구마붕어빵 = new 붕어빵틀('고구마');
console.log(크림붕어빵)
console.log(고구마붕어빵)
// 인스턴스는 붕어빵
 
 class Person{
   constructor(name){
     this.name=name;
   }
   sayHi(){
     console.log(`hello this is ${this.name}`);
   }
 }

 function Person(){

 }
 const Person=(name)=>{
   this.name=name;
 }
 Person.prototype.sayHi=()=>{
   console.log(`hi this is ${this.name}`);
 }
const 재헌 =new Person('재헌');


class 붕어빵틀{
  constructor(재료){
    this.속=재료;// 변수와 값이다.
  }
 sayHi(){
   console.log(`안녕나는 ${this.속} 붕어빵이야`);
 }
}
const 슈크림빵=new 붕어빵틀('슈크림');

슈크림빵.sayHi();

const Person(name){
  this.name=name;
}
Person.prototype.sayHi=()=>{
  console.log(`hi this is ${this.name}`);
}
const kim=new Person('재헌');
const jea=new Person('김');

class Person{
  constructor(name){
    this.name=name;

  }
  sayhi(){
    console.log(`hi this is ${this.name}`;)
  }

}
const person=new Person('.재헌');

const 붕어빵틀=(재료)=>{
  this.속=재료;
}
슈크림빵.prototype.sayHi=()=>{
  console.log(`hi this is ${this.속}`);
}
const 슈크림빵=new 붕어빵틀('슈크림');
슈크림빵.sayHi();


class 붕어빵 {
  constructor(재료){
    this.속=재료
  }
  sayHi(){
    console.log(`안녕 나는 ${this.속} 빵이야`);
  }
}
const 슈크림빵=new 붕어빵('슈크림');
슈크림빵.sayHi();

class 붕어빵틀 {
constructor(재료){
  this.속=재료;

}
sayHi(){
  console.log(`hi this is ${this.속}`);
}
}
const 슈크림빵=new 붕어빵틀('슈크림');
슈크림빵.sayHi();


var x=1;
const y=2;
function foo(){
  var x=3;
  const y=5;
  function bar(){
    console.log(x);
  }
  return bar;
}
const bar=foo();
bar();

String.prototype.getPizza=()=>{
  return `pizza already`;
}
const name='lee';//문자열이 라는 원시값
console.log(name.getPizza());//name이라는 원시값이.을 찍는 순간 래퍼객체에 의해서 객체로 만들어진다. ㅁ누자열 객체는 프로토 타입을 가지게된다.

for(let i=1;i<5;i++){
  if(i===3)continue;
  console.log(i);

}
const obj={a:'one',b:'two',a:'three'};
console.log(obj);//객체는 동일한 값을 덮어쓴다. 따라서 값을 {a:'three, b:'two}가된다.

const a={};
const b={key:'b'};
const c={key:'c'};
a[b]=123;
a[c]=456;
console.log(a[b]);

const arr=[1,2,3];
const copy=arr;
const arr1=[1,2,3];
const copy1=[...arr];

const arr2=[
  {a:1,b:2},
  {a:3,b:2}
];
const copy2=[...arr2];
arr2[0].b=100;
console.log(copy2);

const person={name:'Lee'};
function sayHi(age){
  return `${this.name} is${this.age}`;

}
console.log(sayHi.call(person,20));
console.log(sayHi.bind());
const person={name:'lEE'};
function sayHi(){
  return `${this.name} is ${this.age}`;

}
console.log(sayHi.call(person,20));
console.log(sayHi.bind());


function foo(){
  return (()=>0)();
}
console.log(typeof foo());///number

function Person(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;

}
const member=new Person('jaehun','kim');
Person.getFullName=function(){
  return `${this.firstName} ${this.secondName}`;

}
console.log(member.getFullName());//getFullName은 Person의 정적메소드로 생성되었기 때문에 인스턴스인 member로 접근이 불가능하다.따라서 typeerror getFullName is not Funtion이라는 결과를 반환한다.


function Person(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;

}
const member =new Person('jaehun','kim');
Person.getFullName=function(){
  return `${this.firstName} ${this.secondName}`;

}
console.log(Person.getFullName());//undefined undefined

function Person(firstName,secondName){
  this.firstName=firstName;
  this.secondName=secondName;

}
const lee=Person('jaehun','kim');
console.log(lee); //일반함수로 호춯되었기 때문에 여기서 this는 window전역을 의미하게 되고 일반함수에서 return 문이 없이 때문에 undefined을 반환한다.

Object.create(null)를 사용하여 인수에 null을 주면은 프로토 타입이 없는 객체를 생성할 수 있다 따라서 모든 객체는 프로토타입을 가지지않는다.
function sum(){
  return a+b;
}
console.log(sum(1,2));
function sum(){
  return a+b;

}
console.log(sum(1+'2'));//+결합연산자를 사용하게 되면은 문자열로 결합이 된다.

function getAge(){
  'use strict'
  age=20;
  console.log(age);//Reference Error
}
getAge();

var x=1;
function foo(){
  var x=10;
  bar();

}
function bar(){
  console.log(x);
}
foo();
bar();


function onlyEven(){
  for(i=9;i>=0;i--){
    if(i%2===0)continue;
    console.log(i)
  }
}

let aysnc=0;
setTimeout(()=>{
  aysnc=2;
  callback();
})
function callback(){
  console.log(async);
}





