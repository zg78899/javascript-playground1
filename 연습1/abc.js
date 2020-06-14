function outer(){
if(true){
  var score =1;
}
for(var i =0;i<3;i++){
  setTimeout(() => {
    console.log(i);
  }, 100);
};
}
outer();

//var키워드는 함수 레벨의 스코프이다. 함수레벨의 스코프에서 
//for문안의 비동기 처리는 이미 함수레벨에서 반목문을 이미 돌은 상태이기때문에 
//console.log(i)의 값은 3이다.