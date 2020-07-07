// function solution(clothes){
//  const clothesMap ={};
//  let answer = 1;
//  for(let i =0;i<clothes.length;i++){
//    if(!clothesMap[clothes[i][1]]){
//      clothesMap[clothes[i][1]] = [];

//    }
//    clothesMap[clothes[i][1]].push(clothes[i][0]);
//  }
//  for(let item in clothesMap){
//    answer *= clothesMap[item].length +1;
//  }
//  return answer -1;
// }
console.log(solution([[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]))
// console.log(solution([[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]))

////
function solution(clothes){
  let answer = 1;
  let obj ={};
  for(let arr of clothes){
    obj[arr[1]] = (obj[arr[1]] || 0) +1;
  }
  for(let key in obj){
    asnwer *= obj[key]+1;
  }
  return answer -1;
}
/////
function solution(clothes) {
  return Object.values(clothes.reduce((obj, t)=> {
      obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
      return obj;
  } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

function solution(clothes){
  return Object.values(clothes.reduce((obj,t)=>{
    obj[t[1]] = obj[t[1]] ? obj[t[1]]+1:1;
    return obj;
  },{})).reduce((a,b)=> a*(b+1),1)-1;
}