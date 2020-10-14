// function solution(v) {
//   var answer = [
//       []
//   ];

//  for(var i=0;i<2;i++) {
//      if(v[0][i] == v[1][i]) {
//          answer[i] = v[2][i];
//      } else if(v[0][i] == v[2][i]) {
//          answer[i] = v[1][i];
//      } else if(v[1][i] == v[2][i]) {
//          answer[i] = v[0][i];
//      }
//  }
//   return answer;
// }

function solution(v){
    var answer =[];
    for(let i =0l;i<v.length-1;i++){
        if(v[0][i] === v[1][i]){
            answer[i] = v[2][i];
        }else if(v[1][i] === v[2][i]){
            answer[i] = v[0][i];
        }else if(v[0][i] == v[2][i]){
            answer[i] = v[1][i];
        }
    }
    return answer;
}
console.log(solution([[1, 4], [3, 4], [3, 10]]))

