function solution(priorities,location){
  let answer = 0;
  const list = priorities.map((value,index)=>({
    value,
    index
  }));

  while(true){
    const current = list.splice(0,1)[0];
    console.log(list)
    if(list.some(item=> item.value > current.value)){
      list.push(current);
    }else{
      answer++;
      if(current.index === location){
        return answer;
      }
    }
  }
}

console.log(solution([1,1,9,1,1,1],0));

// //
function solution(priorities,location){
  var list = priorities.map((t,i)=>({
   my: i === location,
   val: t
  }));

  var count =0;
  while(true){
    var cur  = list.splice(0,1)[0];
    if(list.some(item => item.val > cur.val)){
      list.push(cur);
    }
    else{
      count++;
      if(cur.my){
        return count;
      }
    }
  }
}

function solution(priorities, location) {
  const list = priorities.map((value, index) => {
    return {
      value,
      index
    }
  });
  var queue = [];
  while (list.length > 0) {
    var first = list.shift();
    if (list.some(item => item.value > first.value)) {
      list.push(first)
    } else {
      queue.push(first)
    }
  }
  return queue.findIndex(queuIdx => queuIdx === location )+1;
}

//
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      priority,
      index,
    }
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    console.log(firstEle)
    console.log(arr)
    if (arr.some(item => item.priority > firstEle.priority)) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
    console.log(queue)
  }
  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));

//
function solution(priorities, location) {
  var list = priorities.map((value, index) => {
    return {
      value,
      index
    }
  });
  var queue = [];
  while (list.length > 0) {
    let first = priorities.shift();
    if (list.some(item => item.value > first.value)) {
      list.push(first);
    } else {
      queue.push(first);
    }
  }
  return queue.findIndex(queueIdx => queueIdx.index === location)
}


function solution(priorities,location){
  let answer = 1;
  while(priorities.length > 0){
    let max = 0;
    for(i =1;i<priorities.length;i++){
      if(priorities[max] < priorities[i]){
        max = i;
      }
    }
    console.log(max);

    let temp = priorities.splice(0,max);
    console.log(temp)
    priorities = priorities.concat(temp);

    location -= max;
    console.log(location);
    if(location < 0){
      location += priorities.length;
      console.log(location);
    }
    if(location === 0){
      break;
    }
    priorities.shift();
    answer++;
    console.log(answer)
    location--;
    console.log(location);
  }

  return answer;

}
console.log(solution([1,1,9,1,1,1],0));
