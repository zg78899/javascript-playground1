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

function solutoin(v){
    var answer =[];
    for(var i =0;i<2;i++){
        if(v[0][i] === v[1][i]){
            answer[i] = v[2][i];
        }else if(v[0][i] === v[2][i]){
            answer[i] = v[1][i];
        }else if(v[1][i] === v[2][i]){
            answer[i] = v[0][i]
        }
    }
    return answer;
}
console.log(solutoin([[1, 4], [3, 4], [3, 10]]))
// https://medium.com/@ohoroyoi/programmers-%EB%82%98%EB%A8%B8%EC%A7%80-%ED%95%9C-%EC%A0%90-d826db10e658