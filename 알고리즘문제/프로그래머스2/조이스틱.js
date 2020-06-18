function solution(name) {
  var answer = 0;
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var arr = name.split('');
  console.log(arr);

  // 1. 위아래 이동 최소값
  // 메소드를 최대한 활용하자! - charCodeAt();
  // 알파벳 배열 - index 12이하면 위로, 이상이면 아래로 조작이 최소
  for (var i = 0; i < name.length; i++) {
    console.log('i', i);
    var target = name[i];

    if (alphabet.indexOf(target) < 13) {
      answer = answer + alphabet.indexOf(target);
    } else {
      answer = answer + (26 - alphabet.indexOf(target));
    }

    console.log(answer);


    // 2. 좌우 이동 최소값 - A가 나타나는 경우
    // 현 글자의 좌우에서 A아닌 글자를 를 더 빨리 만나는 쪽으로 이동하기
    // = A를 더 늦게 만나는 쪽으로 이동하기 
    var reverseLength = 0;
    var length = 0;
    for (let i = 1; i < name.length; i++) {
      if (name[i] !== 'A') {
        reverseLength = name.length - i;
        break;
      }
    }

    for (let i = name.length; i > 0; i--) {
      if (name[i] !== 'A') {
        length = i;
        break;
      }
    }

  }

  if (length < reverseLength) {
    answer = answer + length;
  } else {
    answer = answer + reverseLength;
  }

  return answer;
}
// console.log(solution("JEROEN")); //56;
console.log(solution("JAN")) //23;

//
function solution(name){
  
  let sum = 0;
  for(let i =0;i<name.length;i++){
    let diff = name[i].charCodeAt() - 'A'.charCodeAt();
    console.log(sum);
    console.log(diff);
    sum += diff > 13 ? 26 - diff : diff;
    console.log(sum);
  }

  let minMove = name.length - 1;
  console.log(minMove);
  for(let i =1;i<name.length;i++){
    if(name[i] === 'A'){
      for(var j = i+1;j<name.length;j++){
        if(name[j] !== 'A'){
          break;
        }
      }
      const left = i-1;
      const right = name.length - j;
      minMove = Math.min(minMove,left > right? left+right*2 :left*2+right);
      console.log(minMove);
      console.log(sum);

      i = j;
    }
  }
  return sum + minMove;
}

function solution(name){
  var answer = 0;
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var arr = name.split('');

  for(let i =0;i<name.length;i++){
    var target = name[i];
    if(alphabet.indexOf(target) <13){
      answer += answer + alphabet.indexOf(target);
    }else{
      answer += answer+ (26 - alphabet.indexOf(target));
    }


    var reverseLength = 0;
    var lengt =0;
    for(let i =0;i<name.length;i++){
      if(name[i] === 'A'){
        reverseLength = name.length - i;
        break;
      }
    }
    for(let i =name.length;i>0;i++){
      if(name[i] !== 'A'){
        length = i;
        break;
      }
    }
  }
  if(length < reverseLength){
    answer = answer+length;
  }else{
    answer = answer+ reverseLength;
  }
  return answer;
}

function solution(name){
  let sum = 0;
  for(let i =0;i<name.length;i++){
    let diff = name[i].charCodeAt() - 'A'.charCodeAt();
    sum += diff > 13 ? 26 - diff :diff;
  }
  let minMove = name.length -1;
  for(let j = 0;j<name.lengtj;j++){
    if(name[j] == 'A'){
      for(let k = name.length;k>0;k--){
        if(name[k] !== 'A'){
          break;
        }
      }
      const left = j -1;
      const right =name.legntj -k;
      minMove = Math.min(minMove,left > right ? left+right*2 : left*+right);
     j = k;
    }
    return sum+ minMove;
  }
}