let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("영업시간이 아닙니다.");
}

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert(firstName || lastn믇 || nickName || "익명"); //바이올렛

if (age >= 14 && age <= 90); //해당 범위

if (age < 14 || age > 90); //out 범위
if (!(age >= 14 && age <= 90)); //!사용 out범위

//로그인 구현하기
let user = prompt("사용자를 입력해 주세요!!");
if (user === "Admin") {
  let password = prompt("비밀번호를 입력해 주세요");

  if (password === "TheMaster") {
    alert("환영 합니다.");
  } else if (password === null || password === "") {
    alert("취소되었습니다");
  } else {
    alert("실패하였습니다");
  }
} else if (user === "" || user === null) {
  alert("취소되었습니다");
} else {
  alert("인증에 실패하였습니다.");
}

//?? 연산자
a ?? b // x = (a !== undefined && a !== null) ? a : b;
let firstName = null;
let lastName = null;
let nickName = 'SuperCoder';

alert( firstName ?? lastName ??  nickName ?? 'Anonymous') // 'SuperCoder';

let height;
height = height ?? 100 //height = 100 할당됨

let height = 0;
alert(height || 100) //100;
alert(height ?? 100) //0 ?? undefined null;

let x = 1&&2 ?? 3; // 제대로 동작
alert(x) //2;

//switch 문 if문 변환

switch(broswer){
case 'Edge':
  alert('Edge를 사용하고 계시네요! ');
  break;
case 'Chromr':
case 'Firefox':
case 'Safari':
case 'Opera':
  alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요');
  break;
default:
  alert('현재 페이지가ㅏ괜찮아 보이길 바랍니다.');        
};

let browser;
if(broswer === 'Edge'){
  alert('Edge를 사용하고 계시네용!');

}else if(broswer === 'Chrome' || 
browser === 'Firefox' || browser === 'Safari' || browser == 'Opera'){
  alert('저희가 지원하는 브라우저를 사용중에 계시군요');
}
else{
  alert('현재 페이지가 괜찮아 보이길 바랍니다.')
};

//switch case과제2;
let a = +prompt('a?','');
if(a === 0 ){
  alert(0);
}
if(a == 1){
  alert(1);

}
if( a === 2|| a === 3){
  alert('2,3');
};

switch(a){
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;    
}

let userName = 'John';
function showMessage(){
  let userName = 'Bob';
  let message  = `Hello ${userName}`;
  alert(message);
}
showMessage();
alert(userName) //'John';
//전역 변수의 최소화


function showmessage(from,text){
  from = '*'+from+'*';
  alert(from + ':' + text);

}
let from = 'Ann';
showMessage(from,'Hello'); '*Ann* : Hello'

alert(from) // Ann

function showMessage(text){
  if(text === undefined){
    text  = '빈 문자열'
  };
  alert(text)
};
showMessage();

function showCount(count){
alert(count ?? 'Unknown');
};
showCount(0);
showCount(null);
showCount();

function checkAge(age){
  if(age > 18){
    return true
  }else{
    return confirm(' 보호자의 동의를 받으셨나요?')
  }
}
let age = +prompt('나이를 입력해 주세요',18);
if(checkAge(age)){
  alert('접속 하용');
}else{
  alert('접속 차단')
};

function dosomeThing(){};
if(dosomeThing() === undefined) return true;

function isPrime(n){
  nextPrime:for(let i =2;i<n;i++){
    for(let j = 2;j< i;j+++){
      if( i % j === 0) continue nextPrime;
    }
    alert(i); //소수
  }
}

function showPrime(n){
  for(let i =2;i<n;i++){
    if(!isPrime) continue;
    alert( i);
  }
  
}
function isPrime(n){
  for(let i = 2;i< n;i++){
    if(n % i === 0) return false;
  }
  return true;
}

function checkAge(age){
  if(age > 18){
    return true;
  }
  else{
    return confirm('보호자의 동의를 받으셨나요');
  }
}

function checkAge(age){
  return age > 18 ?true:confirm('보호자의 동의를 받았나요?');
};
function checkAge(age){
  return age > 18 ||  confirm('보호자의 동의를 받았나요?');
}

function min(a,b){
return a>b ? b:a;
}
function min(a,b){
  if(a > b){
    return b;
  }
  else{
    return a;
  }
}
let x = prompt('x?','');
let n = prompt('n?','');
if( n <1 ){
  alert(`${n}은 양의 정수 이어야 합니다.`);
}else{
  alert(pow(x,n))
}
function pow(x,n){
  let result;
  result = (x ** n);
  return result;
};


function ask(question,yes,no){
  if(confirm(question)){
    yes();
  }else{
    no();
  }
}

function showOk(){
  alert('동의하셨습니다.');
}
function showCancel(){
  alert('최소 버튼을 누르셨습니다.')
};
ask('동의 하십니까?',showOk,showCancel)

function ask(question,yes,no){
  if(confirm(question)) yes();
  else no();
}
ask('동의하십니까?', function (){alert('동의하셨습니다.')}, function (){alert('취소하셨습니다.')});

let age = prompt('나이를 입력해 주세요',18);

//조건에 따라 함수를 선언함
if(age < 18){
  function welcome(){
    alert('안녕!');
  }
}else{
  function welcome(){
     alert('안녕하세요!')
  }
}
welcome();

let age = prompt('나이를 알려주세요',18);

let welcome;
if(age > 18){
  welcome = function(){
    alert('안녕')
  }
}else{
  welcome = function(){
    alert('안녕하세요!');
  }
}
welcome();

let age = prompt('나이를 입력해주세요',18);

let welcome = (age > 18) ? function(){alert('안녕하세요')} :function (){alert('안녕하세요!')};
welcome();


function ask(question,yes,no){
  if(confirm(question))yes();
  else no();
}
ask('동의하십니까?',function(){alert('동의 하셨습니다.')},function (){alert('취소 버튼을 눌렀습니다.')});

let ask = (question,yes,no)=> confirm(question) ? ()=> yes():no();
ask('동의 하십니끼?',()=>alert('동의 하셨습니다.'),alert('취소 하셨습니다.'))