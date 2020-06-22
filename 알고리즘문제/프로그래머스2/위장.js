function solution(clothes){
 const clothesMap ={};
 let answer = 1;
 for(let i =0;i<clothes.length;i++){
   if(!clothesMap[clothes[i][1]]){
     clothesMap[clothes[i][1]] = [];

   }
   clothesMap[clothes[i][1]].push(clothes[i][0]);
 }
 for(let item in clothesMap){
   answer *= clothesMap[item].length +1;
 }
 return answer -1;
}
console.log(solution([[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]))
// console.log(solution([[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]))