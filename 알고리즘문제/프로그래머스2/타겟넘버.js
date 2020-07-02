// function solution(number, target) {
//   var count = 0;
//   function dfs(target, numbers, k) {
//     if (k == number.length) {
//       let sum = 0;
//       for (var i = 0; i < number.length; i++) {
//         sum += number[i];
//       }
//       if (sum == target) {
//         answer++;
//       } return;
//     } else {
//       number[k] *= 1;
//       dfs(target, numbers, k + 1);

//       number[k] *= -1;
//       dfs(target, number, k + 1);
//     }
//   }
//   dfs(target,numbers,0);
//   return count;
// }

// console.log(solution([1, 1, 1, 1, 1], 3)); //5;

//
// function solution(number,target){
//   let count =0;
//   getCount(0,0);

//   function getCount(x,value){
  
//     if(x<number.length){
//       getCount(x+1, value + number[x])
//       getCount(x+1, value - number[x]);
//     }else{
//       if(value == target){
//         count++
//       }
//     }
//   }
  
//   return count;
// }


//
function solution(n,t){
  return getCount(n,0,t);
}
function getCount(n,r,t){
  if(n.length >0){
    var temp = n.pop()+r;
    console.log(temp)
    return getCount(n.slice(),temp,t)+getCount(n.slice(),-temp,t);
  }else{
    if(r == t)return 1;
    else return 0;
  }
}
console.log(solution([1,1,1,1,1],3));
