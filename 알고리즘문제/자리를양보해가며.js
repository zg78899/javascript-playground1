// const 동물 = ['척추동물','무척추동물','파충류','어류','포유류','척추동물','파충류','포유류'];

function solution(동물,자리) {
  let 의자 = [];
  let answer = 0;
  for(var 개별동물 of 동물){

    if (의자.length < 3) {
      if (의자.includes(개별동물)) {
        의자.splice(의자.indexOf(개별동물), 1);
        의자.push(개별동물);
        answer += 1;
      } else {
        의자.push(개별동물);
        asnwer += 60;
      }
    } else {
      if(의자.includes(개별동물)){
        의자.splice(의자.indexOf(개별동물),1);
        의자.push(개별동물);
        answer += 1;
      }else{
        의자.shift();
        의자.push(개별동물);
        answer += 60;
      }
    }
    console.log(의자)
  }
  return `${parseInt(answer/60)}분 ${answer}초`;
}
