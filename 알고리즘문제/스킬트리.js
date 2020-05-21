function solution(skill,skill_tree){
  var answer =0;
  let skillL = skill.split('');
  let str;
  // console.log(skillL);
  for(let i =0;i<skill_tree.length;i++){
    str = skill_tree[i].split('').filter(element => skillL.includes(element)).join('');
    if(str === skill.substring(0,str.length)){
      answer++;
      break;
    }
  }
  return answer;
}
console.log(solution("CDB",["BACDE", "CBADF", "AECB", "BDA"]))