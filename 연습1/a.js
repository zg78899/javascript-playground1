// const arr=[1];
// arr.length=5

// console.log(arr.length);
// console.log(arr)
// console.log(Object.getOwnPropertyDescriptors(arr));
// const arr=new Array({});
// console.log(arr);
// console.log(arr.length);
// const arr=Array(1,2,3,4,5);
// console.log(arr);
// const arr=Array.of('string');
// console.log(arr);
// console.log(arr.length);

// const arr1=Array('string');
// console.log(arr1);
// console.log(arr1.length);

// const arr1=Array.from('Hello');
// console.log(arr1[0]);

// const arr2=Array({length:2,0:'a',1:'b'});
// console.log(arr2);


// const arr3=Array.from({length:5},function (v,i){return i;});
// console.log(arr3);
const arr = [1, 2, 3];
// 인수를 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr); // false

//이때 생성된 복사본은 얕은 복사(shallow copy)를 통해 생성된다.
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

// 앝은 복사(shallow copy)
const _todos = todos.slice();
console.log(_todos);
console.log(Object.getOwnPropertyDescriptors(_todos));

console.log(todos);
console.log(Object.getOwnPropertyDescriptors(todos));


// const _todos = [...todos];
console.log(_todos === todos); // false

// 배열의 요소는 같다. 즉, 얕은 복사되었다.
console.log(_todos[0] === todos[0]); //


(function abc() {
  var aa;
  console.log(aa);
  aa = 'hoisted';
})();//undefined


(function aa() {
  console.log(bb);
  var bb = 'hoisted';
})();//undefined

var i = 10;
for (let i = 0; i < 5; i++) {
  console.log(i);//0,1,2,3,4
}
console.log(i);//5

//  const는 변수의 중복선언이 불가능하지만 이는 immutatble variable이라는 의미는 아니다.

const f = {
  foo: 'bar'
};
f = {
  foo: 'hihi'
};// typeError
f.foo = 'hihi';
console.log(f.foo);// 'hihi';

const name = 'Mark';
console.log(`안녕하세요.\n  제 이름은 ${name}입니다.`)
console.log('안녕하세요.\n' + '제 이름은' + name + '입니다.');

const arr = () => {
  console.log('');
};
const arr1 = () => console.log('hihi');

function Foo() {
  this.name = 'Mark';
  setTimeout(function () {
    console.log(this.name);
  }, 1000);//일반함수이 this는 중첩함수의 경우는 전역 
  setTimeout(() => {
    console.log(this.name);
  }, 1000);//화삺 함수의 this는 자신의 렉시컬환경의 상위
}

const foo = new Foo();
//this눈 생성자 함수가 생성할 인스턴스의 this이다.

const a = () => {
  return '리턴';
};
console.log(a());
const b = () => '리턴';
console.log(b());
const c = props => `리턴 ${porps}`;
console.log(c('프롭스'));

function hello() {
  console.log(`안녕하세요 ${this.name}`);

}
const mark = {
  name: 'Mark'
}
const helloMark = hello.bind(mark);
helloMark();//안녕하세요 Mark

const anna = {
  name: 'Anna'
}
const helloAnna = hello.bind(anna);
helloAnna();//안녕하세요 Anna;

//1레벨 깊이 spread
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));//6
const numbers = [3, 4, 5];
console.log(sum(...numbers));//12

//2레벨 깊이의 spread
const obj = { a: { b: 100 } };
const objClone = { ...obj };
objClone.a.b = 200;
console.log(obj, objClone)//{a:{b:200}},{a:{b:200}}

const obj2 = { a: { b: 100 } };
const obj2Clone = { ...obj2, a: { ...obj2.a } };
obj2Clone.a.b = 200;
console.log(obj2, obj2Clone);//{a:{b:100}},{a:{b:200}};

//콜벡 함수
function foo(callback) {
  setTimeout(() => {
    callback();
  }, 1000)
}
foo(()=>{
  console.log('end');
});
console.log('이것이 먼저 실행');

//Promise는 Promise객체를 만들고 ,로직의 처리의 실패와 성공을 알려준다.
// then과 catch을 통해서 메인 로직을 전다한다.
function foo1(){
  return new Promise((resolve,reject)=>{
   resolve();
  });
}
foo1().then(()=>{
  setTimeout(()=>{
console.log('end');
  },1000);
});
console.log('이것이 먼저 실행');
function foo1 (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          resolve();
    },1000);
  });
}
foo1().then(()=>{
  console.log('end');
});
console.log('이것이 먼저 실행');

// async await 기본적으로 promise을 사용한다. then과 catch을 사용하여 메인로직을 전달한다.
//async 키워드가 불으면 함수안에서만 await 키워드을 사용 할 수 있다.
function foo (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve();
    },1000);
  });
}
(async ()=>{
  await foo();
  console.log('이것이 먼저실행됩니다.');
  console.log('end');
})();

//generator 함수객체 
//function*로 만들어진 함수를 호출하면 반환되는 객체이다.function*에서 yield을 호출하여, 다시 제어권을 넘겨준다.
//generator객체에 next()함수를 호출하면 , 다음 yield 지점까진 간다.
 function* foo (){
   console.log(0.5);
   yield 1;
   console.log(1.5);
   yield 2;
   console.log(2.5);
   yield 3;
   console.log(3.5);
 };
 const g=foo();
 console.log(g.next().value);//0.5 1
 console.log(g.next().value);//1,5 2
 console.log(g.next().value);//2.5 3
 console.log(g.next().value);//3.5 unedfined
 console.log(g.next().value);//undefined undefined

//핸들
 let handle =null;
//비동기 함수
 function bar(){
   setTimeout(()=>{
     handle.next('hello');
   },1000);
 };
 // 핸들을 통해 컨트롤을 넘기는 제너레이터 함수
 function* baz(){
   const text = yield bar();
   console.log(text);
 };

 handle = baz();
 handle.next();

 //React의  keyword
 1.view 라이브러리
 2.오직 렌더링하고 업데이트한다.
 3.작업의 단위가 컴포넌트 단위이다.
 4.실제 DOM을 다루지않고 virtualDom을 다룬다.
 5.jsx
 6.csr & ssr

 <!DOCTYPE html>
 <html lang="ko">
 <head>
   <meta charset="UTF-8"/>
   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
   <title>Document</title>
 </head>
 <body>
   <div id ='root'></div>
   <button id='btn_plus'>+</button>
   <script type="text/javascript">
     const component ={
       message:'init',
       count:0,
       render(){
         return `<p>${this.message}: ${this.count}</p>`
       }
     };
     function render(dom,component){
       root.innnerHTML =component.render();
     }
     render(document.querySelector('#root'),compoent);
     document.querySelector('#btn_plus').addEventListener('click',()=>{
       component.messgae ='updating';
       component.count =component.count+1;
       render(document.querySelector('#root'),component);
     })
   </script>
   
 </body>
 </html>

 //props는 컴포넌트 외부에서 컴포넌트에게 주는 데이터 
 //state는 컴포넌트 내부에서 변경할수있는 데이터
 // props ,state 둘중 하나라도 변견이 일어나면 렌더링이 다시된다.


 function foo(callback){
   setTimeout(()=>{
     callback();
   },1000);
 }
 foo(()=>{
   console.log('end');
 });
 console.log('first');

