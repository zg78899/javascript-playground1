// 문제 설명
// 2016년은 아름다운 연도입니다. 아름다운 연도란, 연도를 구성하는 0부터 9까지의 숫자가 중복 없이 사용된 연도를 의미합니다. 즉, 2016년도는 2가 1번, 0이 1번, 1이 1번, 6이 1번씩 사용되었기 때문에 아름다운 연도라 부릅니다. 하지만 2344년도는 4가 2번씩 사용되었기 때문에 아름다운 연도라고 하지 않습니다.
// 아름다운 연도는 2015년도, 2016년도처럼 연속해서 존재하는 경우도 있지만, 특정 연도 이후로 굉장히 오랫동안 나오지 않을 때도 있습니다. 예를 들어, 1987년도 이후 처음 등장하는 아름다운 연도는 2013년도입니다. 특정 연도 P가 매개변수로 주어질 때, 해당 연도보다 큰 아름다운 연도 중 가장 작은 아름다운 연도를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 연도 P : 1,000 이상 10,000 이하의 자연수
// 입출력 예
// P	answer
// 1987	2013
// 2015	2016
// 입출력 예 설명
// 입출력 예 #1
// 1987년 이후의 아름다운 연도중 가장 작은 아름다운 연도는 2013년도 입니다.

// 입출력 예 #2
// 2015년 이후의 아름다운 연도중 가장 작은 아름다운 연도는 2016년도 입니다.

// function solution(p) {
//   // var answer = 0;

//   let splitY = String(p).split('');
//   console.log(splitY);
//     for(let i =0;i<splitY.length;i++){
//     }
//     console.log(splitY.filter((v,i,self)=>self.indexOf(v) === i))
//     if(splitY.filter((v,i,self)=>self.indexOf(v) === i)){
//       p ++;
//     }else{
//       p++;
//     }
//     return Math.min(p);
//   }
// // 


// function solution(p){
//   let answer =0;
//   let splitP = String(p).split('');
//   const filter = splitP()
//   while(){

//   }
//   return Math.min(p)
// }
// console.log(solution(1987))

// function solution(p){
//   let arr = String(p).split('');
//   let filter = arr.filter((v,i,self)=>self.indexOf(v) === i);
//   while(p){
//   if(filter){
//     p+1;
//     if(!filter){
//       p++;
//     }
//   }
//   }
//   return Math.min(p);
// }

// function solution(p){

//   const gcd = (p) =>{
//     let splitP = String(p).split('');
//     const filter = splitP.filter((v,i,self)=>self.indexOf(v) === i);
//     return filter ? p++: gcd(splitP)
//   }
//   return Math.min(parseInt(gcd(p)));
// }
// console.log(solution(1987));


// function solution(w,h){
//   const gcd = (a,b)=>{
//     return b ===0 ? a : gcd(b, a % b);
//   }
//   return w * h - (w + h - gcd(w, h));
// };

// function solution(skill,skill_tree){
//   var answer =0;
//   let splitP = p.split('');
//   let str;
//   // console.log(skillL);
//   for(let i =0;i<=10000;i++){
//     str = skill_tree[i].split('').filter(element => skillL.includes(element)).join('');
//     if(str === skill.substring(0,str.length)){
//       answer++;
//     }
//   }
//   return answer;
// }

// function solution(p) { 
//   let splitY = String(p).split('');
//   const filter = splitY.filter((v,i,self)=>self.indexOf(v) === i)
//     if(filter){
//       p ++;
//     }else{
//       if(filter){
//           p++;
//       }  
//     }
//     return Math.min(p);
//   }
// function isRepeat(p){
//   var flag = false;
//   var splitP = p.split('');

//   for(let i=0;i<splitP.length;i++){
//     for(j = i+1;j<splitP.length;j++){
//       if(splitP[i] === splitP[j]){
//         flag = true;
//       }
//     }
//     if(flag){
//       isRepeat(p);
//       p++;
//     }else{
//       p+1;

//     }
//   }
//   return p
// }

// function solution(p){
//   return Math.min(p);
// }

// function isRepeat(n){
//  const arr = String(n).split('');
//  for(let i =0)


// }

function solution(p) {
 
  var answer =[];
  p+=1;
  var strNum = String(p).split('');
  
    answer.push(strNum);
    console.log(answer)
    for (let i = 0; i < answer.length; i++) {
      for(let j =0;j<strNum.length;j++){
        if(answer[i][j].indexOf() !== i ){
          
        }else{

        }
      }
    }
  return Math.min(parseInt(strNum.join('')));//연도를 리턴
}
console.log(solution(1987));
