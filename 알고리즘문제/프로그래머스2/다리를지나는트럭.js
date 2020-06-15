
// function solution(bridge_length, weight, truck_weights) {
//   let answer = 0,
//     pending = {
//       weight: 0, //다리 위 전체 무게
//       list: [], // 진입한 차 리스트 {time:진입시점, val:무게}
//     }

//   while (true) {
//     if (!pending.list.length && !truck_weights.length) {
//       //다리 위에 있는 차도 없고, 진입 대기 중인 차도 없는 경우 answer return
//       return answer

//     }
//     answer += 1
//     if (pending.list.length) {
//       if (pending.list[0].time + bridge_length === answer) {
//         //다리 위의 가장 첫번째 차가 진입한 시간에서 다리 길이 만큼 시간이 지나갔을 경우
//         pending.weight -= pending.list.shift().val
//         //해당 차는 제거
//       }
//     }
//     if (truck_weights.length) {
//       if (weight >= pending.weight + truck_weights[0]) {
//         //현재 다리에 진입된 무게에 새차가 올라서도 괜찮은 경우
//         let weight = truck_weights.shift()
//         pending.list.push({
//           time: answer,
//           val: weight,
//         })
//         pending.weight += weight
//         //다리 위에 차 한 대 더 추가
//       }
//     }
//   }
// }
//
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let total_truck_weight = 0;
  let bridge_queue = [];
  let weight_queue = [];

  do {// do while문은 무조건 do 안에 있는 구문이 한번은 실행이 된후 while 문
    console.log(bridge_queue)
    for (let i in bridge_queue) {
      console.log(bridge_queue[i])
      bridge_queue[i]--;
      console.log(bridge_queue[i])
    }
    if(bridge_queue[0] == 0){
      total_truck_weight -= weight_queue.shift();
      bridge_queue.shift();
    }
    // 다리를 건널 수 있으면 크럭 1개 올리기
    if(total_truck_weight + truck_weights[0] <= weight){
      weight_queue.push(truck_weights[0]);
      bridge_queue.push(bridge_length);
      total_truck_weight += truck_weights.shift();
    }
    answer++;
  } while (bridge_queue.length > 0) {
    return answer;
  }
}
console.log(solution(2,10,[7,4,5,6]))



// //
// const solution = (bridge_length,weight,truck_weights)=>{
//   const progress =[];
//   let i =1;
//   while(true){
//     progress.map((item, j)=>{
//       if(item.end === i) progress.splice(j,1);
//     });

//     if(progress.reduce((p,c)=> p+ c.weight,0)+ truck_weights[0] <= weight){
//       progress.push({end:i+ bridge_length,weight:truck_weights.shift()});
//     }
//     if(!progress.length && ! truck_weights.length ) break;
//     i+=1;
//   }
//   return i;
// }

const solution =(birdge_wlength,weight,truck_weights)=>{
  const progress=[];
  let i =1;
  while(true){
    progress.map((item,j)=>{
      if(item === j)progress.splice(j,1);
    });
    if(progress.reduce((c,p)=>p+c.weight)+ truck_weights[0] <= weight){
      progress.push({end:i+birdge_length,wight:truck_weights.shift()});
    }
    if(!progress.length && !truck_weights.length)break;
    i+=1;
  }
  return i;
}
// //
// function solution(bridge_length,wieght,truck_weights){
//   let time =0;
//   const N = truck_weights.legnth;
//   let out =0;
//   let currentWeight = 0;
//   let bridge = [];
//    while(out !== N){
//      if(time - (bridge[0] ? bridge[0][0] : 0) >= bridge_length){
//        currentWeight -= bridge.shift()[1];
//        out++;
//      }
//      if(currentWeight + truck_weights[0] <= weight && bridge.length < bridge_length){
//        bridge.push([time,truck_weigths[0]]);
//        currentWeight += truck_weights.shift();

//      }
//      time++;
//    }
//   return time;
// }

function solution(birdge_length,weight,truck_weights){
  let time =0;
   const N = truck_weights.length;
   let out =0;
  let currentWeight =0;
   let bridge =[];
   while(out !== N){
     if(time - (bridge[0] ? bridge[0][0] : 0) >= bridge_length){
       currentWeight -= bridge.shift()[1];
       out++;
     }
     if(currentWeight + truck_weights[0] <= weight && bridge.length < bridge_length){
       bridge.push([time,truck_weights[0]]);
       currentWeight += truck_weights.shift();
     }
     time++;
   }
   return time;
}