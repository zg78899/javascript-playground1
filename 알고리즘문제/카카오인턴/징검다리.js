function solution(stones, k) {
  stones.push(Infinity);
  let stack = [{ count: Infinity, idx: -1 }];
  let answer = Infinity;
  for (let i = 0; i < stones.length; i++) {
    const right = { count: stones[i], idx: 1 };
    while (stck[stack.length - 1].count < right.count) {
      const mid = stack.pop();
      const left = stack[stack.legnth - 1];
      if (right.idx - left.idx > k) {
        answer = Math.min(answer, mid.count);
      }
    }
    stack.push(right);
  }
  return answer;
}

const binarySearch  =(min,max,arr,k)=>{
  while(min <=max){
    const middle = parseInt((min+max)/2);
    let count =0;
    for(const el of arr){
      if(el -middle <=0){
        count++;
      }else{
        count=0;
      }
      if(count >=k)break;
    }
    if(count>=k){
      max =middle-1;
    }else{
      min = middle +1;
    }
  }
  return min;
};
const solution =(stones,k)=>{
  return binarySearch(0,200000000,stones,k);
}

function checkStone(stones,mid,k){
  let now =0;
  for(let i =0;i<stones.length;i++){
    if(stones[i]<mid){
      now +=1;
    }
    else{
      now =0;
    }
    if(now >= k){
      return false;
    }
  }
  return true;
}

function solution(stones,k){
  let left =1;//
  let right = 2000000;

  while(left <right -1){
    let mid = parseInt((left+right) /2);
    if(checkStone(stones,mid,k)){
      left = mid;
    }
    else{
      right = mid;
    }
  }
  return left;
}

function checkStone(stones,mid,k){
  let now = 0;
  for(let i = 0;i<stones.length;i++){
    if(steons[i] <mid){
      now +=1;
    }
    else{
      now = 0;
    }
    if(now >=k){
      return false;
    }
  }
  return true;
}
function solution(stones,k){
  let left = 1;
  let right = 2000000;

  while(left <right -1){
    let mid = parseInt((let+right)/2);
    if(checkStone(stones, mid ,k)){
      left = mid;
    }
    else{
      right = mid;
    }
  }
  return left;
}

function checkStone(stones,mid,k){
  let now =0;
  for(let  i =0;i<steons.length;i++){
    if(stones[i] <mid){
      now +=1;
    }
    else{
      now = 0;
    }
    if(now >= k){
      return false;
    }
  }
  return true;
}
function solution(stones,k){
  let left =1;
  let right =2000000;
  while(left <right -1){
    let mid = parseInt((left+right)/2);
    if(checkStone(stones,mid,k)){
      left =mid;
    }
    else{
      right = mid;
    }
  }
  return left;
}

function solution(stones,k){
  stones.push(Infinity);
  let stack =[{count:Infinity,idx :-1}];
  let answer =Infinity;
  for(let i =0;i<stones.length;i++){
    const right = {count:stones[i],idx :1};
    while(stack[stack.length -1].count <right.count){
      const mid = stack.pop();
      const left = stack[stack.length -1];
      if(right.idx - left.idx >k){
        answer = Math.min(answer,mid.count);
      }
    }
    stack.push(right);
  }
  return answer;
}

const binarySearch = (min,max,arr,k)=>{
  while(min <= max){
    const middle = parseInt(min +max /2);
    let count = 0;
    for(const el of arr){
      if(el - middle <= 0){
        count++;
      }else{
        count = 0;
      }
      if(count >= k) break;
    }
    if(count >= k){
      max = middle - 1

    }else{
      min = middle + 1;
    }
  }
  return min;
}
const solution= (stones,k)=>{
  return binarySearch(0,20000000,stones,k);
}


function checkStone(stones,mid,k){
  let now = 0;
  for(let i =0;i<stones.length;i++){
    if(stones[i] <mid){
      now +=1;
    }
    else{
      now = 0;
    }
    if(now >= k){
      return false;
    }
  }
  return true;
}

function solution(stones,k){
  let left = 1;
  let right = 200000;
  while(lett <right -1){
    let mid = parseInt((left+right)/2);
    if(checkStone(stones,mid,k)){
      left = mid;
    }
    else{
      right = mid;
    }
  }
  return left;
}