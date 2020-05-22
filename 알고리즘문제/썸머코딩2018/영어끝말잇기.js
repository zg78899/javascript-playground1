function solution(n,words){
  const len = words.length;
  let stack ={}; //object에 property로 저장
  //단어 수(words)만큼 loop;

 for(let i =0;i<len;i++){
   
   const word = words[i];
   if(!stack[word]){
     // 단어가 없으면 stack에 저장
     // 최초 저장이 아닌 경우 && 마지막 문자로 단어를 말하지 않은 경우
     if(i > 0 && words[i-1].charAt(words[i -1].length -1) !== word.charAt(0)){
       return [(i % n)+1 ,Math.ceil((i+1)/n)]; //몇 번째 사람인지 몇 번재 차례인지

     }else{
       stack[word] = word; // prpperty에 저장
     }
   }else{
      
      return [(i % n)+1,Math.ceil((i+1) / n)];
   }
  }
 return [0,0];
}
console.log(solution(3,['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']))
// console.log(solution(5,[hello, observe, effect, take, either, recognize, encourage, ensure, establish, hang, gather, refer, reference, estimate, executive]))
// console.log(solution(2,[hello, one, even, never, now, world, draw]));



//
function solution(n,words){
  let answer =0;

  words.reduce((prev,now,idx) =>{
    answer = answer || ((words.slice(0,idx).indexOf(now) !== -1 || prev !== now[0]) ?idx :answer)
    return now[now.length -1];
  },'');

  return answer ? [answer % n +1, Math.floor(answer / n)+1] : [0 , 0];
}

//
 function solution(n,words){

  var fail_i = -1;
  for(var i =1; i< words.length;i++){
    var val = words[i];

    //전단꼐의 끝말과 현 단계 첫말이 다를 경우
    if(words[i -1].substring(words[i-1].length -1) !== val.substring(0,1)){
      fail_i = i;
      break;
    }
    //indexOf 함수는 첫번째로 값이 인덱스만 반환하므로 
    //현재 인덱스와 맞지 ㅇ낳을 경우 중복된 값
    if(words.indexOf(val) !== i){
      fail_i =i;
      break;
    }
  }
  if(fail_i === -1) return [0,0];

  var no = fail_i % n +1;
  var turn = Math.floor(fial_i / n +1);

  return [no, turn];
  
 }

 //
 function solution(n,words){
   let fail_i = -1;
   for(let i =1;i<words.length;i++){
     let val = words[i];

     if(words[i -1].substring(words[i -1].length -1) !== val.substring(0,1)){
       fail_i = i;
       break;
     }
     if(words.indexOf(val) !== i){
       fail_i = i;
       break;
     }
     if(fail_i === -1) return [0,0];
   }
   var no = fail_i % n +1;
   var turn = Math.floor(fail_i /n +1);


   return [no,turn];
 }