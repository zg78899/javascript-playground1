// toWeirdCase함수는 문자열을 인수로 전달받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로,
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘hello world’라면 첫번째 단어는 ‘HeLlO’, 
// 두번째 단어는 ‘WoRlD’로 바꿔 ‘HeLlO WoRlD’를 리턴한다.
// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  let result ='';
  const strSplit = s.split(' ');
  console.log(strSplit)

  for (let i = 0; i < strSplit.length; i++) {
    result =result+' ';
    for(let j =0;j < strSplit[i].length;j++){
      if(j % 2 === 0){
        result +=strSplit[i][j].toUpperCase();
      }else{
        result +=strSplit[i][j].toLowerCase();
      }
    }
  }
  return result;
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

// function toWeirdCase(s) {
//   const splitWord = s.split(' ');
//   console.log(splitWord);
//   console.log(splitWord.length);
//   function toUpperlower(word) {
//     let res = '';
//     for (let i = 0; i < word.length; i++) {
//       res += i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();//홀수이면 lowercase 짝수이면 uppercase;

//     }
//     return res;
//   }
//   for (let i = 0; i < splitWord.length; i++) {
//     splitWord[i] = toUpperlower(splitWord[i]);

//   }
//   return splitWord.join(' ');
// }

function toWeirdCase(s){
  const splitWord = s.split(' ');
  function toUpperLowerCase(word){
    let res ='';
    for(let i=0;i<word.length;i++){
      res +=i%2? word[i].toUpperCase():word[i].toLowerCase();
    }
    return res;
  }
  for(let i =0;i<splitWord.length;i++){
    splitWord[i] = toUpperLowerCase(splitWord[i]);
  }
}

function solution(s){
  const splitWord = s.split(' ');
  let result='';
  for(let i=0;i<splitWord.length;i++){
    result =result+' ';
    for(let j =0;j<splitWord[i].lengtj;i++){
      result +=(j%2)?splitWord[i][j].toLowerCase():splitWord[i][j].toUpperCase();
    }
  }
  return result;
}

function solution(s){
  const splitWord = s.split(' ');
  let result ='';
  function toLowerUpperCase(word){
    for(let i =0;i<word.length;i++){
      result += (i%2)?word[i].toLowerCase():word[i].toUpperCase();
    }
    return result;
  }
  for(let i=0;splitWord.length;i++){
    splitWord[i] =toLowerUpperCase(splitWord[i]);
  }
  return splitWord.join('');
}

// function toWeirdCase(s) {
//   let splitWord = s.split(' ');
//   function toUpperLowerCase(word) {
//     let result = '';
//     for (let i = 0; i < word.length; i++) {
//       result += i % 2 ? word[i].toupperCase() : word[i].toLowerCase();
//     }
//     return result;

//   }
//   for (let i = 0; i < splitWord.length; i++) {
//     console.log(splitWord[i]);
//     splitWord[i] = toUpperLowerCase(splitWord[i]);
//   }
//   return splitWord.join(' ');
// }
// console.log(toWeirdCase('hello world'));
// console.log(toWeirdCase('my name is lee'));
