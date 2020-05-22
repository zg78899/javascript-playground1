
// function solution(array, commands) {
//   let answer=[];
//   console.log(commands[1])
//     if (commands[0]) {
//       let result = array.slice(1, 5);
//       result.sort();
//       let a=result[2];
//       answer.push(a)
//       console.log(answer)
//     }
//     else if (commands[1]) {
//       let result = array.slice(3, 4);
//       result.sort();
//       let b=result[0]
//       answer.push(b);
//       console.log(answer);

//     }
//     else if (commands[2]) {
//       let result = array.slice();
//       result.sort();
//       let c=result[2];

//     }
//   answer.push(a,b,c);
//   return answer;
// }
// solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);


// function solution(array, commands) {
//   var answer = [];
//   var sliced_arr = []
//   commands.forEach(function(element,i){
//       sliced_arr = array.slice(element[0]-1,element[1])
//       sliced_arr.sort(function(a,b){return a-b})    //이 부분입니다.
//       answer[i] = sliced_arr[element[2]-1]
//   })
//   console.log(answer)
//   return answer;
// }

function solution(array, commands) {
  let result = [];

  for (let a = 0; a < commands.length; a++) {
    let i = commands[a][0];
    let j = commands[a][1];
    let k = commands[a][2];

    let filter = array.slice(i - 1, j);
    let sorted = filter.sort();

    result.push(sorted[k - 1]);
  }
  console.log(result);
}
solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);


function solution(array,commands){
  let result =[];
  for(let i =0;i<commands.length;i++){
      let frist =commands[i][0];
      let second = commands[i][1];
      let third = commands[i][2];

      let filter = array.slice(frist -1,second -1);
      let sorted = filter.sort((a,b)=>a-b);
      result.push(sorted[third -1]);
  }
}

var string ='hello';
var search ='l';
var count = 0;

for(var i =0;i<string.length;i++){
  if(serach !== string) continue;
  count++;
}

console.log(count);

const regex = new RegExp(serach,'g');
console.log(string.match(regexp).length);


function solution(n,lost,reserve){

  let student = Array(n).fill(1);

  for(let i =0;i<lost.length;i++){
    const index = lost[i] - 1;
    student[index] -=1;
  }
  for(let i =0;i<reserve.length;i++){
    const index = reserve[i] -1;
    student[index] +=1;
  }
  for(let i =0;i<student.length;i++){
    if(i !== 0 && student[i] === 0 ){
      if(student[i-1] === 2){
        student[i-1] --;
        student[i]++;
        continue;
      }
      if(i !== student.length -1 && student[i]===0){
        if(student[i+1] ===2){
          student[i+1]--;
          student[i]++;
        }
      }
    }
  }
  return student.filter(i=>i>=0).length;
}

for(var i = 0 ;i<string.length ;i++){
if(string[i] === serach ){
  cont++;
}
}

for(var i =0li<string.length;i++){
  if(satring[i !== search]) continue;
  count++;
}

for(var i)