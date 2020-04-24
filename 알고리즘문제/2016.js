function solution(a,b){
  const day=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const year ='2020';
  let month=4;
  let date=9;
  let dayOfWeek =day[new Date(year+'/'+month+'/'+date).getDay()];
  
  return dayOfWeek
}

console.log(solution(3,25));


function solution(a,b){
  const day=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const yaer='2016';
  let month =a;
  let date =b;
  let dayWeek = day[new Date(year+'/'+month+'/'+date).getDay()];
  return dayWeek;
}

const today = new Date();
today.getFullYear();

const today = new Date();
today.setFullYear(2019);
today.getFullYear();
getFullYear();
getMonth()+1;
getDate();//1-31;
getDay();//요일 0-6의 숫자를 반환


(function printNow(){
const today = new Date();
const dayNames =[' 일요일','월요일','화요일','수요일','목요일','금요일','토요일'];

const day = dayNames[today.getDay()];
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
let hour =today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

const ampm = hour >= 12 ? 'pm':'am';

hour % 12;
hour = hour || 12;


minute = minute <10 ? '0'+minute : minute;
second = second <10 ? '0 '+second : second;


const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
console.log(now);
setTimeout(printNow,1000);
}())