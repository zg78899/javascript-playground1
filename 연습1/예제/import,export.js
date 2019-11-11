const pi = MATH.PI;
function square(x) {
  return x * x;
}
class Person {
  constructor(name) {
    this.name = name;
  }
}
export { pi, Person, square };



import { pi, square, Person } from './lib';
console.log(pi);
console.log(square);
console.log(new Person('lee'));

import { pi, square, Person } from './libs';
import * as lib from './lib';
import * as lib from './lib';

import { pi as PI, square as sq, Person as P } from './lib';

console.log(PI);
console.log(sq);
console.log(P);

function(x) {
  return x * x;
}
export default;//export 할 때  deafault키워드를 사용할 수있지만 ar let const키워드는 사용하지 못한다.
function(x) {
  reutnr x * x;
}
export default;
export default function (x) {
  return x * x;
}
import square from './lib';
console.log(square(10));
import square from './lib.js';
import { createCipheriv } from 'crypto';
import { promises } from 'dns';
import { Z_PARTIAL_FLUSH } from 'zlib';
console.log(square(10));

 < !doctype html >
  <html>
    <body>
      <script type="module" rsc='./lib.js'>
      </script>
      <script>

      </script>
    </body>
  </html>

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('success');
  } else {
    reject('faliled')
  }
})

p.then((message) => {
  console.log('this is in the then ' + message)

}).catch((message) => {
  console.log('this is i the catch' + message)
})


const recorededVideo1 = new Promise((resolve, reject) => {
  resolve('video 1 recoreded')
})
const recorededVideo2 = new Promise((resolve, reject) => {
  resolve('video2 recorded')
})
const recorededVideo3 = new Promise((resolve, reject) => {
  resolve('video3 recorded')
})

Promise.all([
  recorededVideo1,
  recorededVideo2,
  recorededVideo3
]).then((messages) => {
  console.log(messages);
})


function delay(sec, callback) {
  setTimeout(() => {

    callback(new Date().toISOStting());
  }, sec * 1000)
}

console.log('statr', new Date().toISOString());

delay(1, (result) => {
  console.log(1, result)
  delay(1, (result) => {
    delay(1, (result) => {
      console.log(3, result)
    });
    console.log(2, result)
  });
});

delay(1, (result) => {
  console.log(1, result);
});

function delayP(sec)  {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOStting());
    }, sec * 1000)
  });
}

delayP(1).then((result) => {
  console.log(1, result);
  return delayP(1);
}).then((result) => {
  console.log(2, result);
  return delayP(1);
}).then((result) => {
  console.log(3, result);
}).then((result) => {
  console.log(result);
})//then 결과를 받을 콜백을 받는다.프로미스의 인스턴스


Promise, all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000),
    new Promise(resolve => setTimeout(() => resolve(1), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)

]).then(console.log)
  .catch(console.log);

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error1')), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 2')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))
]).then(console.log)

  .catch(console.log);//Error :Error3

Promise.all([
  1,//resolve(1)
  2,//resolve(2)
  3//resolove(3)

]).then(console.log)
  .catch(console.log);

const githubIds = ['kim', 'jae', 'hun'];
Promise.all(githubIds.map(id => fetch(`http://api.github.com/users/${id}`)))
  .then(response => Promise.all(response.map(res => res.json())))
  .then(users => users.map(user ? user.name))
  .then(console.log)
  .catch(console.log);

Promise.race([
  new Promise(resolve => setTimeout(() => resolve(1), 3000))
  new Promise(resolve => setTimeout(() => resolve(2), 2000))
  new Promise(resolve => setTimeout(() => resolve(3), 1000))

]).theen(console.log)
  .catch(console.log);//3

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error1')), 3000))
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 2')), 2000))
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 3')), 1000))

]).then(console.log)
  .catch(console.log);//Error: Error 3;


const resolvePromise = new Promise(resolve => resolve([1, 2, 3, 4]));
resolvePromise.then(console.log);//[1,2,3,4];

const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);//[1,2,3];
const resolvePromise = new Promise(resolve => ([1, 2, 3]));
resolvePromise.then(console.log);
const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);


const rejectPromise = Promise.reject(new Error('Error'));
rejectPromise.then(console.log);//Error:Error;
const rejectPromise = new Promise((resolve, reject) => reject(new Error('Error')));
rejectPromise.catch(console.log);

const resolevePromise = Promise.reject(new Error('Error'))
rejectPromise.catch(console.log);

const rejectPromise = new Promise((resolve, reject) => reject(new Error('Error')));
rejectPromise.catch(console.log);



const promiseAjax = (method, url, payload) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response);

      } else {
        reject(new Error('Error'));
      }
    };

  });
};

const url = 'http://jsonplcaholder.typicoed.com/posts';

promiseAjax('GET', `${url}/1`);
  .then(ews => promiseAjax('GET', `${url}?userId=${JSON.parse(res).userId}`))
  .then(JSON.parse)
  .then(render)
  .catch(console.log);


promiseAjax('GET','http://jsonplaceholder.typicode.com/posts/1')
.then(JSON.parse)
.then(render)
.catch(console.error);


const promise=new Promise((resolve,reject)=>{
  if(){
    resolve('result');
  }else{
    reject('failure reeson');
  
  }
});

const promiseAjax=(methid,url,playload)=>{
  return new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onreadystatechange=()=>{
      if(xhr.readyState !== XMLHttpRequest.DONE)return;
      if(xhr.status >=200 && xhr.status<400){
        resolve(xhr.response);
      }else{
        reject(new Error(xhr.status));
      }
    };
  });
};
promiseAjax('GET','hhtp://jsonplaceholder.typicode.com/posts/1')
.then(JSON.parse)
.then(
  render,
  console.error
)

promiseAjax('GET','http://jsonplaceholder.typicode.com/posts/1');
.then(JSON.parse)
.then(render)
.catch(console.error);


const $result=document.querySelector('.result');
const render=>{$result.textContent=JSON.stringify(content,null,2);};
const promiseAjax=(methid,url,payload)=>{
  const xhr=new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.setRequestHeader('Content-type','application/json');
  XPathEvaluator.send(JSON.stringify(payload));

  xhr.onreadystatechange=()=>{
    if(xhr.readyState !== XMLHttpRequest.DONE)return;
    if(xhr.status >= 200 && xhr.status <400){

    }else
  };
};
