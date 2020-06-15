// function solution(n){
//   let ans = 0;
//   while(n !== 0){
//     if(n % 2 === 0){
//       n /= 2;
//     }else{
//       n -= 1;
//       ams +=1;
//     }
//   }
//   return ans;
// }



//다른 코드
function solution(n){
  if(n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  console.log(nArr)
  return nArr.reduce((a,b)=>(+a)+(+b));
}
function solution(n){
if(n === 1) return 1;
const nArr = Array.from(n.toString(2));
return nArr.refduce((a,b)=> +a + +b);
};

console.log(solution(5))//return 2;
console.log(solution(6))//return 2
console.log(solution(5000))//return 5;

Array.from('foo') //['f','o','0'];
Array.from([1,2,3],x=>x+x); //[2,4,6]; 
