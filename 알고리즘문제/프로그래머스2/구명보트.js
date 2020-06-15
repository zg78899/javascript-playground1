function solution(people,limit){
  people.sort((a,b)=>a-b);
  for(let i =0,j = people.length -1;i <j;j--){
    if(people[i] + people[j] <= limit)i++;
  }
  return people.length - i;
}
console.log(solution([70,50,80,50],100)); //return 3;
console.log(solution([70,80,50],100)); //return 3;

function solution(people,limit){
  var answer = 0;
  people.sort((a,b)=>b-a);
  let l = 0;
  let r = people.length -1;

  while(l < r){
    var sum = people[l] +people[r];
    if(sum >limit){
      l++;
    }else{
      l++;
      r--;
    }
    answer++;
  }
  if(l == r) answer++;
  return answer;
}
//
function solution(people,limit){
  people.sort((a,b)=> b-a);
  let count = 0;
  while(people.length){
    if(people[0] + people[people.length -1] <=limit){
      people.shift();
      people.pop();
    }else{
      people.shift();
    }
    count++;
  }
  return count;
}