function binarySearch(array, target) {
  let min =0;
  let max  = array.length -1;
  while(min <= max){
    let mid = Math.floor((min+max)/2);
    if(array[mid] < array.indexOf(target)+1){
      min = mid+1;
    }else if(array[mid] > array.indexOf(target)+1){
      max = mid-1;
    }else{
      return mid;
    }
  }
  return -1;
}




console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
