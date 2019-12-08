
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