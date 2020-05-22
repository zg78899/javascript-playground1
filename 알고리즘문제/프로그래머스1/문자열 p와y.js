function soludtion(s){

const str = s.toLowerCase();
let countP = 0;
let countY = 0;

for(let i =0;i<str.length;i++){
  if(str[i]  === 'p') countP+=1;
  else if(str[i] === 'y') countY +=1;

}
return countP === countY;
  
}

function solution(s){
   
  let str=s.toLowerCase();
  let countP=0;
  let countY=0;

  for(let i=0;i<str.length;i++){
      if(str[i]==='p')++countP;
      if(str[i]==='y')++countY;
  }
  return countP === countY;
}