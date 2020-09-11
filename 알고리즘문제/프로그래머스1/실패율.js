// function solution(N, stages) {
//   let rates =[]
//   let answer=[];
//   let failRate =0;
//   let count =0;
//   let length = stages.length - count;
//   for(let i =1;i<=N;i++){
//        console.log(count = stages.filter(c => c === i).length);

//       if(i === 1){
//           failRate = count / length;
//           length -= count;   
//       }else{
//         failRate = count /(length);
//         length -= count;
//       } 
//     rates.push(
//       {rate:failRate,
//         stage:i
//       });
//   }
  
//   rates.sort((a,b)=>{
//     if(a.rate === b.rate){
//       return a.stage - b.stage
//     }
//     return b.rate -a.rate;
//   });


//   for(let i=0;i<rates.length;i++){
//      answer.push(rates[i].stage);
//   };

//   return answer;

// }

function solution(N,stage){
  let rate = [];
  let answer = [];
   let failRate = 0;
   let count = 0;
    let length = stage.length - count;
    for(let i = 1;i<=N;i++){
      if(i === 1){
        failRate = count / length;
        length -= count; 
      }else{
        failRate = count / length;
        length -= count;
      };
      rate.push({
        str:i,
        rate: count=== 0 ? 0 :length === 0? 0 :count/length
      })
    }
    rate.sort((a,b)=>{
      if(a.rate === b.rate){
        return a.str - b.str;
      };
      return b.rate - a.rate;
    });
    
   for(let i =0;i<rate.length;i++){
     answer.push(rate[i].str);
   };
   return answer;
   
}

// function solution(N,stage){
//   var answer = [];
//    var arr = [];
//    var stagesSize = stage.length;
//    for(let i =1;i<=N;i++){
//      let top = 0;
//       let bottom = 0;
//       for(let j = 0;j<stagesSize;j++){
//         if(stage[j] === i){
//           top++;
//           bottom++;
//         }
//         else if(stage[j] > i){
//           bottom ++;
//         }
//       }
//       arr.push({
//         str:i,
//         rate:top === 0 || bottom === 0 ? 0 : top/bottom 
//       });
//    };
   
//    arr.sort((a,b)=>{
//      if(a.rate === b.rate){
//        return a.str - b.str;
//      };
//      return b.rate - a.rate;
//    });

//    for(let i =0;i<arr.length;i++){
//     answer.push(arr[i].str);
//    };
//    return answer;
// }



console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));


// function solution(N, stages) {
//   let answer = [];
//   let failRateArray = [];
//   let stagesSize = stages.length;
      
//   for (let i = 1; i <= N; i++) {
//       let top = 0;
//       let bottom = 0;
      
//       for (let j = 0; j < stagesSize; j++) {
//           if (stages[j] === i) {
//               top++;
//               bottom++;
//           }
//           else if (stages[j] > i) {
//               bottom++;
//           }
//       }

//       // i번째 스테이지의 실패율 객체 저장
//       failRateArray.push({
//           stage: i,
//           failRate: bottom === 0 || top === 0 ? 0 : top/bottom
//       });
//   }

//   // 실패율 내림차순 정렬. 단, 실패율이 같은 경우에는 stage 기준으로 오름차순 정렬한다.
//   failRateArray.sort((a, b) => {
//           if (a.failRate === b.failRate)
//               return a.stage - b.stage;
      
//           return b.failRate - a.failRate
//   });

//   for (let i = 0; i < failRateArray.length; i++)
//       answer.push(failRateArray[i].stage);
  
//   return answer;
// }

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));


// function solution(N,stages){
//   let answer =[];
//   let result=[];
//   let count =0;
//   let length = stages.length -count;
//   let failRate = 0;

//   for(let i =1;i<=N;i++){
//     count = stages.filter(c=>c === i).length;
//     if(i === 1){
//       failRate = count/length;
//       length --;
//     }else{
//       failRate = count/length;
//       legth --;
//     }
//     answer.push({failRate,
//     stage:i
//   })
//   }
//   answer.sort((a,b)=>{
//     if(a.failRate === b.failRate){
//       return a.stage - b.stage;
//     }
//     return b.failRate - a.failRate
//   });
//   for(let i =0;i<answer.length;i++){
//     result.push(answer[i].stage);
//   };
//   return answer;

// }

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

// function solution(N,stages){
//   let answer=[];
//   let result =[];
//   let size = stages.length;
//   for(let i =1;i<=N;i++){
//     let top =0;
//     let bottom =0;
//     for(let j = 0;j<size.length;j++){
//       if(size[j] === i){
//         top++;
//       }else if(size[j] >= i ){
//         bottom++;
//       }
//       answer.push({
//         stage:i,
//         rate: top === 0 ? 0:bottom === 0? 0: top/bottom
//       });
//     }
//   }
//   answer.sort((a,b)=>{
//     if(a.rate === b.rate){
//       return a.stage - b.stage;
//     }
//     return a.rate - b.rate
//   });
//   for(let i = 0 ;i<answer.length;i++){
//     result.push(answer[i].stage);
//   }
//   return result;
// }