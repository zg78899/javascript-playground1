// 삽입 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라.
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.

function insertionSort(array) {
let result = [...array];
let res =[];
let length = result.length;

function IdxFnc(res,value){
  for(var i in res){
    if(value < res[i]){
      return i;
    }
  }
  return res.length;
}

for(let i =0;i<length;i++){
  value = result.shift();
  idx = IdxFnc(res,value);
  res.splice(idx,0,value);
}
return res;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]


//삽입정렬
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];
// let 배열의길이 = 입력값.length;

// function 삽입값이들어갈인덱스(정열된배열, 삽입값) {
//   for (var i in 정열된배열) {
//     if (삽입값 < 정열된배열[i]) {
//       return i;
//     }
//   }
//   return 정렬된배열.length;
// }
// for (let i = 0; i < 배열의길이; i++) {
//   삽입값 = 입력값.shift();
//   인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값); //함수가 다음 들어값 값을 앞에 들어갈지 뒤에 들어갈지 인덱스로 만들어서 사용한다.
//   정렬된배열.splice(인덱스, 0, 삽입값);

//   console.log(`인덱스 : ${인덱스}`);
//   console.log(`정렬된 배열 : ${정렬된배열}`);
// }
