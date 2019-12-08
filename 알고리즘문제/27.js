// 27. 요일 구하기
// 2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까?
//  두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 출력한다.
//  예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

function getDayName(a, b) {

  let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let year = '2016';
  let month = a;
  let day = b;
  console.log(new Date())
  let dayOfWeek = dayName[new Date(year+'/'+month+'/'+day).getDay()];
  console.log(dayOfWeek)
  return dayOfWeek;
}

console.log(getDayName(5, 24)); // TUE

// function getDayName(a, b) {

//   let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   let year = '2016';
//   let month = a;
//   let day = b;
//   console.log(new Date())
//   let dayOfWeek = dayName[new Date(year+'-'+month+'-'+day).getDay()];
//   console.log(dayOfWeek)
//   return dayOfWeek;// TUE
// }

// console.log(getDayName(5, 24)); // TUE

// function getDayName(a, b) {

//   let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   let year = '2016';
//   let month = a;
//   let day = b;
//   console.log(new Date())
//   let dayOfWeek = dayName[new Date(year/month+/day).getDay()];
//   console.log(dayOfWeek)
//   return dayOfWeek;// THU
// }

// console.log(getDayName(5, 24)); // THU

// function getDayName(a, b) {

//   let dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   let year = '2016';
//   let month = a;
//   let day = b;
//   console.log(new Date())
//   let dayOfWeek = dayName[new Date(year,month,day).getDay()];
//   console.log(dayOfWeek)
//   return dayOfWeek; //FRI
// }

// console.log(getDayName(5, 24)); // FRI

/// 문제
// function getDayName(a,b){

//   var date = new Date(2016, (a - 1), b);
//     return date.toString().slice(0, 3).toUpperCase();
// }

// //아래 코드는 테스트를 위한 코드입니다.
// console.log(getDayName(5,24));

// function getDayName(a,b){
//   var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
//   var date = new Date(`2016-${a}-${b}`);
// var day = date.getDay()
//   return arr[day];
// }

// //아래 코드는 테스트를 위한 코드입니다.
// console.log(getDayName(5,24));