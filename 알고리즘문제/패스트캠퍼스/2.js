// function getCount8() {
//   let num = 0;
//   for (let i = 1; i <= 10000; i++) {
//     const strNum = i + '';
//     for (let j = 0; j < strNum.length; j++) {
//       if (strNum.charAt(j) === '8') {
//         num += 1;
//       }
//     }
//   }
//   return num;
// }
// console.log(getCount8());


function geCount8(){
  let num = 0;
  for(let i =0;i<=10000;i++){
    let strNum = i+'';
    for(let j= 0;j<strNum.length;i++){
      if(strNum.charAt(j) === '8')
      num+=1;
    }
  }
  return num;
}

function Count1(){
  let num =0;
  for(let i =0;i<=1000;i++){
    let strNum =''+i;
    console.log(strNum);
    for(let j =0;j<strNum; j++){
      if(strNum.charAt(j) === '1'){
        console.log(strNum.ctarAt(j));
        num ++;
      }
    }
  }
  return num;
}

function solution(){
  let num = 0;
  for(let i =0;i<=1000;i++){
    let strNum =''+i;
    for(let j = 0;j<strNum ;j++){
      if(strNum.charAt(j) === '1'){
        num ++;
      }
    }
  }
  return num;

}
//for of

// let s ='';
// for(let i =0;i<15;i++){
//   s +=i;
// }
// console.log(s);
// let count = 0;
// for(let k of s){
//   // console.log(k);
//   if(k == '1'){
//     count++;
//   }
// }
// console.log(count);

//for in

// let s  = '';
// for(let i =0 ;i <17;i++){
//   s +=i; 
// }
// let count = 0;
// for( let i in s){
//   if(s[i] === '1'){// for in 의 경우에는 인덱스로 접근을 한다.
//     count++;
//   }
//   console.log(i)// s의 인덱스 총 23
//   console.log(s.length -1)
// }
// console.log(count);

//정규표현식

// let s ='';

// for(let i =0;i<17;i++){
//   s += i;
// }
// console.log(s);
// console.log(s.match(/1/g).length);//전체에서 1을 찾는다.

// 10
// 11
// 12
// 13
// ...
// 998 
// 999

// 998 %10 8
// 998/10 99

// 99 %10 9
// 99 /10 9

// 9%10 9
// 9 /10 0(반복은 종료한다.)

const obj ={};

for(let i =0;i<1000;i++){
  let tmp = i;
  while(tmp > 0){
    let num = tmp % 10;
    if(obj[num]){
      obj[num]++;
    }else{
      obj[num] = 1;
    }
    tmp = parseInt(tmp /10,10);
  }
}
console.log(obj[1])//1에서 1000까지 1이 들어가는 횟수
