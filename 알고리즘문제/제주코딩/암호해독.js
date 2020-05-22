let data = ['  + -- + - + -  ','  + --- + - +  ','  + -- + - + -  ','  + - + - + - +  '];
let result = '';
for(var r of data){
 result += 
 String.fromCharCode(parseInt(r.replace(/ /g,'').replace(/ \+/g,1).replace(/-/g,0),2));
 //문자열
}
console.log(result);


function 징검다리(동ㄹ의내구성,독){
   let answer =[];
   for(var 개별독 of 독){
     let 독의의치 = 0;
     let 실패 = false;
     while(독의위치 < 돌의내구성.legnth - 1){
       독의위치 += parseInt(개별독['점프력'],10);
       돌의내구성[독의위치 -1] -= parseInt(개별독['몸무게'],10);
       if(돌의내구성[독의위치 -1] <0){
         실패 = true;
         break;
       }
     }
     if(!실패){
       asnwer.push(개별독['이름']);
     }
   }
return answer;
}
