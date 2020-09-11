function solution(p) {
  // 변수선언
  var answer = '';
  var countR = 0; // ')' 개수
  var countL = 0; // '(' 개수
  var isStringRight = true; // p가 올바른지 여부
  
  // 재귀함수
  // 0. 이미 올바른(=짝이 맞는) -> 'p' return
  
  // 1. 빈 문자열이면 빈 문자열
  if (p === '') {
      return answer;
  }

  for (var i=0; i<p.length; i++){ //문자열 하나씩 확인
      if(p[i]==='('){
          countL += 1;
      }
      if(p[i]===')'){
          countR += 1;
      }
      
      if (countL < countR){ //***올바르지 않을 조건
           isStringRight = false;
          console.log(i, countL, countR);
          console.log(i, isStringRight);
      }
      
      if(countL === countR) { // 2. 두 문자열로 분리 (u,v) 시점
          if(isStringRight===true){ // 3. 올바른 문자열이면
             answer = answer + p.slice(0, i+1); // 해당문자열 그대로
             answer = answer + solution(p.slice(i+1)); //나머지에 대해 동일 작업 수행 
              return answer;
              
          } else { // 4. 올바르지 않은 문자열이면
              answer = '(' + solution(p.slice(i+1))+')' //4-1~3

              for(var j=1; j<i; j++){ //**index 주의
                  if(p[j]==='('){
                      answer = answer + ')';
                  }else{
                       answer = answer + '(';
                  }
              }
              return answer;
           }
       }    
  }
}

function solution(p){
    var answer = [];
    var countL = 0;
    var countR = 0;
    var isStringRight = true;

    if(p === ''){
        return answer;
    }
    for(let i =0;i<p.length;i++){
        if(p[i] === '('){
            countL +=1;
        }
        if(p[i] === ')'){
            countR +=1;
        };
        if(countL <countR){
            isStringRight = false;
        };
        if(countL === countR){
            if(isStringRight = true){
                answer = asnewr+p.slice(0,i+1);
                answer = asnewr +solution(p.slice(i+1));
                return answer;
            }else{
                ansewr = '('+solution(p.slice(i+1))+')';
                for(var j = 1;i<i;j++){
                    if(p[j] === '(' ){
                        answer =answer +')'
                    }else{
                        answer = answer+ '('
                    }
                };
                return answer;

            }
        }
    }
     
}