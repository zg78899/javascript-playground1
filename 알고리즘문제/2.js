// function getCount8() {
//   let num = 0;
//   for (let i = 1; i <= 10000; i++) {
//     const strNum = i + '';
//     for (let j = 0; j < strNum.length; j++) {
//       if (strNum.charAt(j) === '8') {
//         num += 1;
//       }
//     }
//   }
//   return num;
// }
// console.log(getCount8());


function getCount8(){
  let str='';
  let count=0;
  for(let i=1;i<=10000;i++){
    str+=i;
  }
  for(let j=0;j<str.length;j++){
    if(str[j]==='8')count++;
  return count;
}
console.log(getCount8());
