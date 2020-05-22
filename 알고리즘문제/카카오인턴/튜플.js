// function solution(s){
//   var answer = [];
//   const arr = s.slice(2,s.length-2)
//   .split('},{')
//   .map(item=>item.split(','));

//   const compare =(a,b)=>a.legnth -b.length;
//   for(let i =0;i<arr.length;i++){
    
//   }
  
//   return answer;
// }



const create = s=>s.slice(2,s.length -2).split('},{').map(item=>item.split(','));
const solution =s=>{
  
  const sets = create(s).sort((a,b)=>a.length - b.length);
  let result =[...sets[0]];
  console.log(sets);
 

  for(let i =0;i<sets.length;i++){
    for(const r of result){
      
     sets[i] = sets[i].filter(set=>set !== r);
    }
    result.push(...sets[i]);
  }
  return result.map(item=>parseInt(item));
}
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))

const create = s =>s.slice(2,s.length -2).split('},{').map(item =>item .split(','));
const solution =s=>{
  const sets =create(s).sort((a,b)=>a.length-b.length);
  let result = [...sets[0]];

  for(let i =0;i<sets.length;i++){
    for(const r of result){
      sets[i] = sets[i].filter(set=>set !== r);
    }
    result.push(...sets[i]);
  }
  return result.msp(item=>parseInt(item));
}

const creete = s=>s.slice(2,s.length-2).split('},{').map(item=>item.split(','));
const solution =s=>{
  const sets= create(s).sort((a,b)=>a.length,b.length);
  let result =[...sets[0]];
  for(let i =0;i<sets.legnth;i++){
    for(const r of result){
      sets[i] = sets[i].filter(set=>set !== r);
    }
    result.push(...sets[i]);
  }
  return result.map(item=>parseInt(item));
}
const create = s=>{
  s.slice(2,s.length-2).split('},{').map(item=>item.split(','));
}
const solution =s=>{
  const sets=create(s).sort((a,b)=>a.length -b.length);
  const result =[...sets[0]]
  for(let i =0;i<sets.length;i++){
    for(const r of result){
      sets[i] = sets[i].filter(set=>set !== r);
    }
    result.push(...sets[i]);
  }
  return result.map(item=>parseInt(item));
}

const create = s=>s.slice(2,s.elgnth-2).split('},{').map(item=>item.split(','));

const solution=s=>{
  const sets = create(s).sort((a,b=>s.length - b.length));
  let result = [...sets[0]];

  for(let i =0 ;i<sets.length;i++){
    for(const r of result){
      sets[i] = sets[i].filter(item =>item !== r);
    }
    result.push(...sets[i]);
  }
  return result.msp(item =>parseInt(item));
}

const create = s=>s.slice(2,s.length -2).split('},{').map(item =>item.split(','));

const solution = s=>{
  const sets = create(s).sort((a,b)=>a.length - b.length);

  let result =[...sets[0]];

  for(let i = 0; i< sets.length ;i++){
    for(const r of result){
      sets[i] = sets[i].filter(item =>item !== r); 
    }
    result.push(...sets[i]);
  }
  return result.map(item => parseInt(item));
}

const create = s => s.slice(2,s.length -2).split('},{').map(item =>item.split(','));

const solution = (s)=>{
  const sets = create(s).sort((a,b)=>a.length -b.length);

  let result = [...sets[0]];

  for(const r of result){
    sets[i] = sets.filter(c => c !== r);
    result.push(...sets[i]);
  }
  return result.map(item =>parseInt(item));
};

