//선택 정렬
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let res = []
for (let i = 0; i < a.length; i++) {
  a.sort((a, b) => a - b);
  res.push(Math.min(...a));
  a.splice(a.indexOf(Math.min(...a)), 1);
}
console.log(res);
console.log(a);

//최소값을 반환하는 함수
function min(min) {
  const minV = (acc, cur) => acc < cur ? acc : cur;
  return min.reduce(minV);
}
console.log(min([3, 4, 10, 2, 1, 6]));

//최대 값을 반환하는 함수
function max(max) {
  const maxV = (acc, cur) => acc > cur ? acc : cur;
  return max.reduce(maxV);

}
console.log(max([2, 3, 3, 4, 2, 10]));

//삽입정렬
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];
// let 배열의길이 = 입력값.length;

// function 삽입값이들어갈인덱스(정열된배열, 삽입값) {
//   for (var i in 정열된배열) {
//     if (삽입값 < 정열된배열[i]) {
//       return i;
//     }
//   }
//   return 정렬된배열.length;
// }
// for (let i = 0; i < 배열의길이; i++) {
//   삽입값 = 입력값.shift();
//   인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값); //함수가 다음 들어값 값을 앞에 들어갈지 뒤에 들어갈지 인덱스로 만들어서 사용한다.
//   정렬된배열.splice(인덱스, 0, 삽입값);

//   console.log(`인덱스 : ${인덱스}`);
//   console.log(`정렬된 배열 : ${정렬된배열}`);
// }

//병합정렬
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// function 병합정렬(입력배열) {

//   let 입력배열의길이 = 입력값.length;
//   if (입력배열의길이 <= 1) {
//     return 입력배열;
//   }
//   let 중간값 = parseInt(입력배열의길이 / 2);
//   let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
//   let 그룹둘 = 병합정렬(입력배열.slice(증간값));

//   return ` 그룹하나 : ${그룹하나} 그룹둘 : ${그룹둘}\n`;

// }
// console.log(병합정렬(입력값));
let 입력값 = [5,10,66,77,54,32,11,15];

function 병합정렬(입력배열) {

  let 입력배열의길이 = 입력값.length;
  let 결과값 = [];
  if (입력배열의길이 <= 1) {
    return 입력배열;
  }
  let 중간값 = parseInt(입력배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력배열.slice(증간값));

  while(그룹하나.length !==0 && 그룹둘.length !== 0){
    if(그룹하나[0] < 그룹둘[0]){
      결과값.push(그룹하나.shift());
    }else{
      결과값.push(그룹둘.shift());
    }
  }
  while(그룹하나.length !==  0){
    결과값.push(그룹하나.shift());
  }
  while(그룹둘.length !== 0){
    결과값.push(그룹둘.shift()); 
  }
  return 결과값;
  // return ` 그룹하나 : ${그룹하나} 그룹둘 : ${그룹둘}\n`;

}
console.log(병합정렬(입력값));

//퀵정렬


let 입력값 = [66,77,54,32,10,5,11,15];

//[66,77,54,32,10,5,11,15];
//피봇값 : 66;
//[54,32,10,5,11,15] +[66] +[77];
//피봇값 :54
//[32,10,5,11,15] +[54] +[66] +[77];
//피봇값 : 32
//[10,5,11,15]+[32]+ [54] +[66] +[77];;
//피봇값 :10 
//[5]+[10] +[11,15]+[32]+ [54] +[66] +[77];;
//피봇값 :11
//[5]+[10] +[11]+ [15]+[32]+ [54] +[66] +[77];;

function 퀵벙렬(입력배열){
  let 입력배열의길이 =  입력배열.length;

  if(입력배열의길이 <= 1){
    return 입력배열;
  }
  let 피봇값 =[입력값.shift()];
  let 그룹하나 =[];
  let 그룹둘 = [];

  for(let i in 입력배열){
    if(입력값[i] < 피봇값){
      그룹하나.push(입력배열[i]);
    } else{
      그룹둘.push(입력배열[i]);
    }
  }
  console.log(` 그룹하나 : ${그룹하나}\n 그룹둘 : ${그룹둘}\n 피봇값 :${피봇값}`);

 return 퀵정렬(그룹하나).concat(피봇값,퀵정렬(그룹둘));
  
}
 console.log(퀵정렬(입력값));


 function 퀵정렬(입력배열){
   let 입력배열의길이 = 입력배열.length;
   if(입력배열의길이 <= 1){
     return 입력배열;
   }
   let 피봇값 = [입력깂.shift()];
   let 그룹하나 = [];
   let 그룹둘 =[];

   for(let i in 입력배열){
     if(입력깂[i] < 피봇값){
        그룹하나.push(입력배열[i]);
     }else{
       그룹둘.push(입력배열[i]);
     }
   }
    return 퀵정렬(그룹하나).concat(피봇값,퀵정렬(그룹둘));
    
 }
 