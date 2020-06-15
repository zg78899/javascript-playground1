// function solution(heights){
//   let stack =[];
//   let count =0;
//   for(let i =0;i<heights.length;i++){
//        if(i !== 1 && heights[i] > heights[i+1]){
//          stack.push([i])
//        }
//        if()
//   }
//   return stack;
// }
// function solution(heights){
//   return heights.map((top,index)=>{
//     var list = heights.slice(0,index+1).reverse();
//     console.log(list);
//     var find = list.findIndex(f => f > top);
//     console.log(find);
//     console.log(list.length)
//     return find > 0 ? list.length - find : 0
//   })
// }


//
function solution(heights){
  return heights.map((v,i)=>{
    console.log(v)
    console.log(i);
    while(i){
      console.log(i)
      i--;
      console.log(i)
      console.log(v);
      console.log(heights[i] )
      if(heights[i] > v){
        return i+1
      }
    }
    return 0;
  });
}  

// function solution(heigths){
//   let answer =[];

//   for(let i = heigths.length -1;i >= 0;i--){
//     for(j = i -1;j>= 0;j++){
//       if(heigths[i] < heigths[j]){
//         answer.unshift(j+1);
//         break;
//       }
//       if(j === 0){
//         answer.unshift(0);
//       }
//     }
//   }
//  return [0].concat(answer);
// }


console.log(solution([6,9,5,7,4]))
 

