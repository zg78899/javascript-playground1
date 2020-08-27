function solution(s) {
  var answer = 0;
  var repeat  = s.length;
  var newArr = [];
  for(let i =0;i<repeat;i++){
      let count = 1;
      let num = i+1;
      let newStr = '';
      for(let j = 0;j<repeat; j=j+num){
          var currentSub = s.substring(j,j+num);
          var nextSub = s.substring(j+num,j+num+num);
          
          if(currentSub === nextSub){
              count+=1;
          }else{
              if(count !== 1){
                  newStr = newStr+count+currentSub
              }else{
                  newStr = newStr+currentSub
              }
              count = 1;
          }
      }
      newArr.push(newStr.length)
      
  }
  answer = Math.min(...newArr);
  return answer;
}