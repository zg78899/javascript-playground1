// 나의 풀이

function solution(n) {

  let res = [];
  let result = n.toString();
  for (let i = 0; i < result.length; i++) {
    res.push(parseInt(result[i]));
  }
  return res.sort().reverse();

}
console.log(solution(12345))

function solution(n){
  return n.toString().split('').sort().reverse().map(v=>parseInt(v))
}
function solution(n){
  return (n+'').split('').sort(function(a,b){return b-a}).map(v=>parseInt(v))
}
function solution(n){
  return n.toString().split('').reverse().map(v=>parseInt(v))
}
//sort 하면 안되는 이유가?


function solution(n){
  return n.toString().split('').reverse().map(v=>parseInt(v));
}

function solution(n){
  const answer =n.toString().split('').sort((a,b)=>b-a).join('');
  return parseInt(answer);
}


function solution(arr1,arr2){

let answer = Array();
for(let i =0;i<arr1.length;i++){
  answer[i]=[];
  for(let j = 0;j<arr1[i].length;j++){
   answer[i][j] = arr1[i][j]+arr2[i][j];
  }
}
return answer;

}

function solution(arr1,arr2){
  return arr1.map((arr,i)=>arr.map((v,j)=>v+arr2[i][j]));
}


function solution(n){
  let answer =0;
  let str = n.toString();
  for(let i=0;i<str.length;i++){
    answer+=parseInt(str[i]);
  }
  return answer;

}

function solution(n) {
  return  Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1,2) : -1;
}

function solution(arr){
  let answer=[];
  for(let i =0;i<arr.legnth;i++){
    arr.length ===1 ? answer.push(-1) : answer=arr.splice(arr.indexOf(Math.min(...arr),1))); 
  }
  return answer;
}

function solution(arr) {
  let answer=[];
    
    if(arr.length<=1){
        answer[0]=-1;
        
    }else{
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer=arr;
        
    }
    return answer;
}

process.stdin.setEncoding('utf-8');
process.stdin.on('data',data=>{

  const n = data.split(' ');
  const a = Number(n[0]),b=Number(n[1]);
  let star = '';
  for(let i =0;i<b;i++){
    for(let j =0;j<a;j++){
      star +='*'
    }
    star +='\n';
  }
  console.log(star);

  })

  process.stdin.seEncoding('utf-8');
  process.stdin.on('data',data=>{
    const n = data.split('');
    const a = Number(n[0]),b=Number(n[1]);
    let star='';
    for(let i =0;i<b;i++){
      for(let j=0;j<a;j++){
        star+='*';
      }
      star+='\n';
    }
    console.log(star);
  });


  function solution(x,n){
    let answer=[];
    for(let i =1;i<=n;i++){
      answer[i-1]= x*n
    }
    return answer;
  }

  function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
      answer.push(x * i)
    }
    return answer;
  }

  function solution(arr){
    let str = arr.toString();
    let sum =0;
    for(let i =0;i<str.length;i++){
      sum +=parseInt(str[i]);
      arr % sum ==0 ? true:false;
    }
  }
  function solution(a,b){
    let gcd = calGcd(a,b);
    let lcd = (a*b)/gcd;
    return [gcd,lcd];
  }

  function calGcd(a,b){
    if(b===0) return a;
    return a>b ? calGcd(b,a%b):calGcd(a,b%a);
  }

  function solution(a,b){
    let gcd = calGcd(a,b);
    let lcd = (a*b)/gcd;
    return [gcd,lcd];
  }

  function calgcd(a,b){
    if(b === 0) return a;
    return a>b ? calGcd(a,a%b):calGcd(b,b%a);
  }

  function solution (s){
    let splitT = s.split(' ');
    function toUpperLowerCase(word){
      let result ='';
      for(let i =0;i<word.length;i++){
        result += i%2? word[i].toLowerCase():word[i].toUpperCase();
      }
      return result;
    }
    for(let i =0;i<splitT.length;i++){
      splitT[i] = toUpperLowerCase(splitT[i]); 
    }
    return splitT.join('');
  }

  function solution(s){
    let splitWord = s.split(' ');
    function  toLowerUpperCase(word) {
      let result='';
      for(let i=0;i<word.length;i++){
        result += (i%2)? word[i].toLowerCase() : word[i].toUpperCase();
        
      }
      return result;
    }
    for(let i =0;i<splitWord.length;i++){
      splitWord[i] = toLowerUpperCase(splitWord[i]);
    }
    return splitWord.join('');
  }

  function solution(s){
    let splitword = s.split(' ');
    function toLowerUpperCase(word){
      let result ='';
      for(let i =0; i<word.length;i++){
        result += (i%2)? word[i].toLowerCase():word[i].toUpperCase();
      }
      return result;
    }
    for(let i=0;i<splitword.length;i++){
      splitword[i] = toLowerUpperCase(splitword[i]);
    }
    return splitword.join('');
  }

  function solution (s){
    let splitT= s.split('');

function toLowerUppercase(word) {
  let result ='';
  for(let i =0;i<word.length;i++){
    result += (i%2)? word[i].toLowerCase():word[i].toUppercase();
  }
  return result;
  
}
for(let i=0;i<splitT.length;i++){
  splitT[i]= toLowerUppercase(splitT[i]);
}
return splitT.join('');

function solution(n){
  let count =0;
  
  while(n>1){
   if(count >=500){
     return -1;
   }else{
     if(n % 2 ===0){
       n =  n/2;
     }else{
       n = (n * 3) +1;
     }
   }
   count++;
  }
  return count;
}
function solution (n){
  let count=0;
  while(n>1){
    if(count>=500){
      return -1;
    }else{
      if(n%2 ===0){
        n = n/2;
      }else{
        n= (n*3)+1;
      }
    }
    count++;
  }
  return count;
}

function solution(answer) {
  
  let list =[
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ];
  let count =[0,0,0];

  for(let i=0;i<answer.length;i++){
    if(answer[i] === list[i][i % list[1].length]){
      count[0]++;
    }
    if(answer[i] === list[i][i % list[2].length ]){
      count[1] ++;
    }
    if (answer[i] === list[i][i % list[3].length]){
      count[2]++;
    }
  }

  let max = Math.max(...count);
  for(let j=0;j<count.length;j++ ){
    let res =[];
    if(count === max){
      res.push(j+1);
    }
  }
  return res;  
}
console.log(solution([1,2,3,4,4,5]))


function solution(n){
  let list =[
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ];
let count =[0,0,0];
for (let i =0;i<n.lnegth;i++){
  if(answer[i] === list[i][i % list[1].length] ){
    count[0]++;
  }
  if(answer[i] === list[i][i%list[2].length]){
    count[1]++;
  }
  if(answer[i] === list[i][i % list[2].length]){
    count[2]++;

  }
}
let max = Math.max(...count);
for(let i =0;i<count.length;i++){
  let res=[];
  if(max === count[i]){
    res.push(i+1);
  }
}
return res;
}

function solution(answer){
  let list=[
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ];
let count =[0,0,0];
for(let i =0 ;i<answer.length;i++){
  if(answer[i] === list[i][i % list[0].length]){
    count[0]++;
  }
  if(answer[i] === list[i][i % list[1].length]){
    count[1]++;
  }
  if(answer[i] === list[i][i % list[2].length]){
    count[2]++;
  }
}
let max = Math.max(...count);
for(let j=0;j<count.length;j++){
  let res=[];
  if(max === count[i]){
    res.push(j+1);
  }
}
return res;
}
