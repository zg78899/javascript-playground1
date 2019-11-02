24. 평균구하기
인수로 주어진 배열의 평균을 구하는 함수를 완성하라.

function average(array){
array.reduce((pre,cur,i,self)=>{
return i=self.length-1? pre+cur/self.length:pre+cur;

},0);
}

console.log(average([5, 3, 4])); // 4