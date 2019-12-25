// function solution(arr1, arr2) {
//   let res = [];
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j <arr1.length; j++) {
//         res.push(arr1[i][j] + arr2[i][j]);

//       }
//     } return res;
//   }

// }


// const solution = (arr1, arr2) => {
//   return arr1.map((arr, i) => arr.map((v, j) => arr2[i][j]))
// }

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
// console.log(solution([[1], [2]], [[3], [4]]));
function solution(a, b) {
  return a.map((arr, i) => arr.map((v, j) => v + b[i][j]));
}
