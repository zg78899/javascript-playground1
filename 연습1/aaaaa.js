// function getThisBinding() {
//   console.log(arguments);
//   return this;
// }
// const thisArg={a:1};

// console.log(getThisBinding.apply(thisArg,[1,2,3]));
// console.log(getThisBinding.call(thisArg,1,2,3));


// const now=Date.now();
// console.log(now);

// const today=new Date();

// today.setFullYear(2000);

// let year=today.getFullYear();
// console.log(today);
// console.log(year);

// today.setFullYear(1900,0,1);
// year=today.getFullYear();
// console.log(today);
// console.log(year);

(function printNow() {
  const today = new Date();

  const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // 0 => 12

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(now);
  setTimeout(printNow, 1000);
}());
