function solution(participant, completion) {

  let part=participant.sort();
  let comple=completion.sort();
  console.log(part)
  console.log(comple)

    
  for (let i = 0; i < part.length; i++) {
    console.log(part[2])
    for (let j = 0; j < comple.length; j++) {
      console.log(comple[2])
      if (part[i] === comple[j]) {   
        console.log(part[i]===comple[j]) 
        part.splice(part[i],comple.length);
      }else{
        return part[i]
      }
    }
  }
  return part.join('');
}
// solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
// solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"])