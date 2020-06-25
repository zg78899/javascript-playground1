function solution(s){
 const arr = s.split(' ').map(item => parseInt(item));
 const Max = Math.max(...arr);
 const Min = Math.min(...arr);

 return `${Min} ${Max}`;
};
console.log(solution("-1 -2 -3 -4"));

// 
function solution(s){
const arr = s.split(' ');
return Math.min(...arr)+' '+Math.max(...arr);
}
