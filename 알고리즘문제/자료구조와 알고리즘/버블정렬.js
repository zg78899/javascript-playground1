// 버블 정렬을 통해 주어진 배열(array)을 정렬하는 함수를 구현하라.
// 단, 어떠한 빌트인 함수도 사용하지 않고 for 문을 사용하여 구현하여야 한다.
//버블 정렬

function bubbleSort(array) {
  let result =[...array];
  for(let i =0;i<result.length -1;i++){
    for(let j = 0;j<result.length -i;j++){
      if(result[j] > result[j+1]){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;  
}

console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
// console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
// console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]

