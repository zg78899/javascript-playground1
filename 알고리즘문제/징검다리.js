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