// function convertArgsToArray() {
//   console.log(arguments);

//   // arguments 객체를 배열로 변환
//   // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
//   const arr = Array.prototype.slice.apply(arguments);
//   // const arr = Array.prototype.slice.call(arguments);
//   console.log(arr);
//   return arr;
// }
// convertArgsToArray(1, 2, 3);
// let todos = [
//   { id: 1, contnet: 'HTML', completed: false },
//   { id: 2, contnet: 'CSS', completed: true },
//   { id: 3, contnet: 'Javascript', completed: false },
// ];
// function getValue() {
//   return todos.map(todo => todo[key]);
// }
// console.log(getValue('id'));
// console.log(getValue('content'));
// console.log(getValue('completed'));

// function addTodo(newTodo) {

//   todos = [...newTodo, toods];
// }
// addTodo = { id: 4, content: 'reat', complted };

// function removeTodo() {
//   todos = toods.filer(todo => todo.id !== id);
// }
// removeTodo(2);
// console.log(todos);

// function toogle(id) {
//   todos = todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo);
// }
// toggle(2);
// console.log(todos);

// function getMaxid() {
//   return Math.max(...todos.map(todo => todo.id));
//   return Math.max.apply(null, todos.map(todo => todo.id));
// }
// console.log(getMaxid());

// function Person(fristName,secondName){
//   this.fristName=fristName;
//   this.secondName=secondName;
// }
// const member=new Person('jae','kim');

// Person.getFullName=function(){
//   return `${this.fristName} ${this.secondName}`;
// }
// console.log(member.getFullName());
// // member의 prototype 체인에서 getFullName을 찾지만 찾을 수가 없다 undefined이다.하지만 undefined은 함수가 아니므로 type error가 발생한다.

// function Person(fristName,secondName){
//   this.fristName=fristName;
//   this.secondName=secondName;

// }
// const member=new Person('jae','kim')l
// Person.getFullName=function(){
//   return `${this.fristName} ${this.secondName}`;
// }
// console.log(Person.getFullName());

// function Person(fristName,secondName){
//   this.fristName=fristName;
//   this.secondName=secondName;
// }
// const lee=Person('jae','kim');
// console.log(lee);
//모든 객체는 프로토 타입 객테를 가지고있나요? 아니요 objsct.create 을 사용하여 인수에 null을 주면은 프로토 타입이 업슨 객체가ㅏ 생성된다. 나머지는 다있다.
// function checckAge(data){
//   if(data)==={age:18}{
//     console.log('you are an adult');
    
//   }else if(data=={age:18}){
//     console.log('you are still adult');
    
//   }else{
//     console.log('hmm... you dont hava an age i guee);
//   }
//   }
//   checckAge({age:18});
function Person(fristName,secondName){
  this.fristName=fristName;
  this.secondName=secondName;
}
const member=new Person('jae','kim');

Person.getFullName=function(){
  return `${this.fristName} ${this.secondName}`;
}
console.log(member.getFullName());

function Person(fristName,secondName){
  this.fristName=fristName;
  this.secondName=secondName;
}
const member=new Person('jae','kim');

Person.getFullName=function(){
  return `${this.fristName} ${this.secondName}`;
}
console.log(Person.getFullName());

function Person(fristName,secondName){
  this.fristName=fristName;
  this.secondName=secondName;
}
const member=Person('jae','kim');

console.log(member);
