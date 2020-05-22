//완전 탐색 dfs(깊이 우선 탐색);

// const isPossible =(bannedId,userId)=>{
//   if(userId.length !== bannedId.length)return false;
//   for(let i =0;i<bannedId.length;i++){
//     if(bannedId[i] === '*' || bannedId[i] === userId[i]) continue;
//     return false;
//   }
//   return true;
// }
// const createIdInfos =(userIds,bannedIds,isPossible)=>{
//   const result = new Array(bannedIds.length).fill(null).map(el=>new Set());
//   // console.log(result)
//   console.log(bannedIds)
  
//   for(const bIdx in bannedIds){
//     console.log(bIdx)
//     for(const uIdx in userIds){
//       console.log(userIds)
//       console.log(uIdx)
//       if(!isPossible(bannedIds[bIdx],userIds[uIdx]))continue;
//       if(result[bIdx].has(uIdx))continue;
//       result[bIdx].add(uIdx);
//     }
//   }
//   return result;
//   console.log(result);
// }

// const getCount =(idInfos,bIdx = 0,idVisited = [], caseVisited = new Set())=>{
//   if(bIdx === idInfos.length){
//     const visit = idVisited.reduce((acc,visited,i)=>{
//       if(!visited) return acc;
//       return acc+i;
//     },'');
//     if(caseVisited.has(visit))return 0;
//     caseVisited.add(visit);
//     return 1;
//   }
//   let result =0;
//   for(const uIdx of idInfos[bIdx]){
//     if(idVisited[uIdx])continue;
//     idVisited[uIdx] = true;
//     result += getCount(idInfos,bIdx+1,idVisited,caseVisited);
//     idVisited[uIdx] = false;
//   }
//   return result;

// }
// const solution =(userIds,bannedIds)=>{
//   const idInfos = createIdInfos(userIds,bannedIds,isPossible);
//   return getCount(idInfos);
// }
// console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]))


// function solution(user__id,banned_id){
//   const candidates =[];
//   const answer=[];
//   banned_id.forEach(ban=>{
//     const candidate =[];
//     user__id.forEach((id,i)=>{
//       if(comp(ban,id)) candidate.push(i);

//     });
//     candidates.push(candidate);
//   });
//   function f(i =0,selected =[]){
//     if(!candidates[i]){
//       selected.sort();
//       answer[selected.join('')] = true;
//       return;
//     }
//     candidates[i].filter(e=>!selected.includes(e).forEach(e=>{
//       f(i+1,selected.concat([e]));
//     }));
//   }
//   f();
//   return Object.keys(answer).length;

// }
// function com(ban,id){
//   if(id.length !== ban.length) return false;
//   for(let i =0;i<ban.length;i++){
//     if(ban[i] === '*') continue;
//     if(ban[i] !== id[i]) return false;
//   }
//   return true;
// }

// let result=0;
// const memo = [];
// function solution(user_id,banned_id){
//   const banned_list = banned_id.map(bannedId=> bannedId.replace(/\*/g,'.'));
//   const visit = [...user_id].fill(false);
//   dfs(user_id,banned_list,0,0,visit);
//   return result;
// }
// function dfs(user_id,banned_id,idx,n,visit){
//   const visited = [...visit];
//   const regex =RegExp(`\^${banned_id[idx]}\$`);

//   if(n === banned_id.length){
//     const temp = [];
//     visited.forEach((v,i)=>v && temp.push(user_id[i]));

//     let cnt = 0;
//     memo.forEach(array=>{
//       let flag;
//       for(let i =0;i<temp.length;i++){
//         flag = array.some(element=>element === temp[i]);
//         if(!flag){
//           break;
//         }
//       }
//       !flag && cnt++;
//     });
//     if(cnt === memo.length){
//       memo.push(temp);
//       result++;
//     }
//     return;
//   }
//   user_id.filter((id,index)=>{
//     if(regex.test(id)){
//       if(!visited[index]){
//         visited[index] = true;
//         dfs(user_id,banned_id,idx+1,n+1,visited);
//         visited[index] =false;
//       }
//     }
//   });
// }

let result =0;
const memo =[];

function solution(user_id,banned_id){
  const banned_list = banned_id.map(bannedId => bannedId.replace(/\*/g,'.'))
  console.log(banned_list[2]);
  const visit = [...user_id].fill(false);
  console.log(visit);
  dfs(user_id,banned_list,0,0,visit);
  return result;
}
function dfs(user_id,banned_id,idx,n,visit){
  const visited =[...visit];
  console.log(visited);
  const regex = RegExp(`\^${banned_id[idx]}\$`);
  console.log(regex);

  if(n === banned_id.length){
    const temp =[];
    visited.forEach((v,i)=> v && temp.push(user_id));
    console.log(visited);
    let cnt =0;
    memo.forEach(array=>{
      let flag;
      for(let i =0;i<temp.length;i++){
        flag = array.some(element=>element === temp[i]);
        if(!flag){
          console.log(flag);
          break;
        }
      }
      !flag && cnt++;
    });
    if(cnt === memo.length){
      console.log(temp);
      memo.push(temp);
      result++;
    }
    return;
  }
  user_id.filter((id,index)=>{
    if(regex.test(id)){
      if(!visited[index]){
        visited[index] = true;
        dfs(user_id,banned_id,idx+1,n+1,visited);
        visited[index] = false;
      }
    }
  })
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"],["fr*d*", "*rodo", "******", "******"]))