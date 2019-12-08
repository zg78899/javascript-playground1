// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
// participant	completion	return
// [leo, kiki, eden]	[eden, kiki]	leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

/** 나의 풀이  */ //단 문제는 이중 for문을 사용하였을때 효울성에서 시간이 초과한다.
function solution (participant,completion){

  let part=participant.sort();
  let comple=completion.sort();
  
  for(let i=0;i<part.length;i++){
    for(let j=0;j<comple.length;j++){
      if(part[i] === comple[j]){
        part.splice(part[i],1);
      }
      else return part[i]
    }
  }
  return part.join('');
}

/**문제의 답 */
function solution(participant, completion) {

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {

    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

