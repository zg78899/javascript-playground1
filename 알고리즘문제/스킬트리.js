function solution(skill,skill_tree){
  var answer =0;
  let skillL = skill.split('');
  let str;
  // console.log(skillL);
  for(let i =0;i<skill_tree.length;i++){
    str = skill_tree[i].split('').filter(element => skillL.includes(element)).join('');
    if(str === skill.substring(0,str.length)){
      answer++;
    }
  }
  return answer;
}

function testSkillTress(skillLaw,skillTree){
  const law = [ ...skillLaw];

  for(const skill of skillTree){
    if(law.includes(skill)){
      const index = law.indexOf(skill);
      if(index === 0){
        law.shift();
      }else{
        return false;
      }
    }
  }
  return true;
}
function solution(_skill,_skillTrees){
  const skill = _skill.split('');

  return _skillTrees.reduce((count,skillTree) => testSkillTress(skill,skillTree.split('')) ? count+1 :count,0);
}

function testSkillTress(skillLaw,skillTrees){
  const law = [...skillLaw];
  for(const skill of skillTrees){
    if(law.includes(skill)){
      const index = law.indexOf(skill);
      if(index === 0){
        law.shift();
      }else{
        return false;
      }
    }
  }
  return true;
}

function solution(_skill,_skillTree){
  const _skill = _skill.spli('');

  return _skillTree.reduce((count,skillTree) => testSkillTress(skill,skillTree.split(''))?count+1:count);
}
console.log(solution("CDB",["BACDE", "CBADF", "AECB", "BDA"]))

function solution(skill,skill_tree){
  var answer = 0;
  for(let i =0;i<skill_tree.length;i++){
    let temp =[...skillTree[i]];
    temp = temp.filter(e => skill.includes(e).join(''));
    if(skill.includes(temp) &&  skill[0] === temp[0]){
      answer++;
    }
    if(temp.length === 0){
      answer++;
    }
  }
  return answer;
}

function solution(skill,skill_tree){
  function isCorrect(n){
    let test = skill.split('');
    for(var i =0 ;i<n.length;i++){
      if(!skill.inculdes(n[i])) continue;
      if(n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }
  return skill_tree.filter(isCorrect).length;
}