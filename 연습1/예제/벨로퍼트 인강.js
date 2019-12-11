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

/**for of 구문 */
const numbers=[10,20,30,40];

for(let number of numbers){//배열안에 았는 것들을 작업학때
  console.log(number);
}
const numbers=[10,20,30,40,50];

const doggy={
  name:'멍멍이',
  sound:'멍멍',
  age:2
}

/**for in 구문 */

for(let key in doggy){
  console.log(`${key}:${value}`)
}
console.log(Object.keys(doggy));
console.log(Object.value(doggy));
console.log(Object.entries(doggy))//배열 형태 key value

/**함수의 기본 파리미터 */
function cal(r){
  const radius=r || 1;
  return Math.PI*radius*radius;
}
const area=cal();
console.log(area);

/** es6의 파라미터 기본 */
const cal=(r=1) => Math.PI*r*r;

const area=cal();
console.log(area);


// spread 기존 객체를 복사하고 추가적인 값을 넣어줄때 사용한다.(보통은 배열에서 사용한다.)

//rest 파라미터 객체의 배열,함수의 파라미터에서 사용한다.

 const abc={
   a,
   b,
   c
 }
 const {a, ...aaa}=abc;
 console.log(a);
 console.log(aaa);

const numbers=[10,20,30,40];
const [one,...rest]=numbers; //배열에서 ...rest는 맨 앞에서 사용할 수 없다.


/**함수 파라미터에서의 rest */
function sum(a,b,c,d,e,f,g){
return a+b+c+d+e+f+g;

}
console.log(1,2,3,4,5,6);//파라미터의 개수와 같은 개수를 넣지앟으면 NaN

function sum(a,b,c,d,e,f){
  let result=0;
  if(a) result+=a;
  if(b) result+=b;
  if(c) result+=c;
  if(d) result+=d;
  if(e) result+=e;
  if(f) result+=f;
  
  return result;
}
console.log(sum(1,2,3,4,5,6,7))//이렇게 해줘야하는 번거로움이 있다.

function sum(...params){
  return rest.reduce((pre,cur)=>pre+cur,0);
}
console.log(1,2,3,4,5,6)// 함수의 파라미터에 개수를 하나의 배열로 ... rest가 반환해준다.
//함수에서 의 파라미터에 rest을 사용하는 경우는 파라미터에 개수가 몇개인지 모를때

/**함수의 인자에서의 rest파라미터 */
function sum(...params){
  return rest.reduce((pre,cur)=>pre+cur,0);
}
const numbers=[1,2,3,4,5,6];
console.log(sum(...numbers));//함수의 인자에서 reat파라미터를 사용


function work(callback){

  setTimeout(() => {
    const start=Date.now();
    for(let i=0;i<1000000000;i++){
    }
    const end=Date.now();
    console.log(end-start +'ms');
    callback(end-start)
  },0)
}
console.log('작업시작');
work((ms)=>{
  console.log('작업이 끝났습니다.');
  console.log(ms+'ms 걸렸다고 해요');
});

console.log('다음 작업');



function wor(callback){

  setTimeout(()=>{
    const start=Date.now();
    for(let i=0;i<100000000;i++){
  
    }
    const end=Date.now();
    console.log(end-start+'ms');
    callback(end-start)
  },0)
}
console.log('작업시작');
work((ms)=>{//ms는 callback의 매개변수로 들어온다.
  console.log('작업이 끝났어요');
  console.log(ms+'ms 걸렸다고 해요');

});

console.log('다음 작업');

//ajax web API요청 /파일읽기 /암호화/복호화/ 작업예약에서비동기 처리를 사용한다.
/** Promise *///비동기 처리 예전에는 콜백함수를 사용하여 비동기 처리를 하였다, 그러나 콜백함수가 많이 사용되면 콜백 헬이 발생하게 된다.

function inceaseAndPrint(n,callback){
  setTimeout(()=>{
    const incease=n+=1;
    console.log(incease);
    if(callback){
      callback(incease)
    }

  },1000);
}

inceaseAndPrint(0,n=>{
  inceaseAndPrint(n,n=>{
   inceaseAndPrint(n,n=>{
     console.log('작업 끝')
   })
  })
});

const promise =new Promise((resolve,reject)=>{
  //작업을 구현 성공 실패
  setTimeout(()=>{
    reject(new Error());
  },1000);
})
promise.then(result=>{
  console.log(result);
}).catch(e=>{
  console.error(e);
});

function inceaseAndPrint(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const value=n+1;
      if(value===5){
        const error=new Error();
        error.name="ValluisFail";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    },1000);
  })
}
inceaseAndPrint(0).then(n=>{
  return inceaseAndPrint(n);
}).then(n=>{
  return increaseAndPrint(n)
}).then(n=>{
  return increaseAndPrint(n)
}).then(n=>{
  return inceaseAndPrint(n);
}).catch(e=>{
  console.error(e);
})
//위 와 같은 표현이다.
inceaseAndPrint(0).then(increaseAndPrint)
 .then(increaseAndPrint)
 .then(increaseAndPrint)
 .then(increaseAndPrint)
.catch(e=>{
  console.error(e);
})
//에러를 잡을 때 어떤 부분에서 에러가 일어났는지 알기 어렵고,then으로 처리하기 때문에 분기 처리가 어렵고
// 때문에 async await을 사용한다.

/** async await */
function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}
function makeError(){
  await sleep(1000);
  const error=new Error();
  throw error;
}
async function process(){
  try{
    await makeError();

  }catch(e){
    console.error(e)
  }
}
process();

function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}

async function process(){
 
}
process();

/** Promise.all-여러개들중 하나라도 에로가 발생하면 try,catch로 에러를 잡을 수있다.
 *  and Promise.race-그러나 Promise.race는 가장 먼저 끝난 결과값에 에러가 발생하지않으면 에러가 발생한것으로 간주하지않는다. */

function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
};
const a=async ()=>{
  await sleep(1000);
  return 'a';
}
const b=async ()=>{
  await sleep(500);
  return 'b';
}
const c=async ()=>{
  await sleep(3000);
  return 'c';

}
async function proess(){
  try{
    const {a,b,c}}=Promise.all([a(),b(),c()]);//셋중하나라도 에러가 발생하면 다름으로 못넘어간다.
  }catch(e){
    console.error(e);
  }
  console.log(result);// 한꺼번에 뮦어서 다음 처럼 나타낸다.실제로 이는 3초 걸렸다.
  console.log(a);
  console.log(b);
  console.log(c);
}
async function proess(){
  const first =Promise.race([a(),b(),c()]);
  console.log(first);// 가장 빨리 끝난 결과물이 된다.
  //에로가 발생했을때도 가장 빨리 발생하는 값의 에러가 아니면 에로가 발생한 것으로 간주하지 않는다.

}
process();









