// import { log } from "util";

const promise = new Promise((resolve, reject) => {//프로미스는 new로 생성한 객체
  // 비동기 처리
  const random = Math.floor(Math.random * 10);
  setTimeout(() => {
    if (random >= 5) resolve(random);//인수로 성공한 값을 줌
    else reject(new Error('Error'))//실패한 이유를 담아준다.
  });
});
// console.log(typeof promise);
promise
  .then(res => console.log(res));//콜백의 인자로 성공했을때 인수로 넘어옴/catch 실패했을때 인수로 넘어옴
  .catch(err => console.log(err));