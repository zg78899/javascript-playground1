//2 특수문자 
//1 소문자
//3 처음 또는 마지막 . 제거
//4 빈 문자열일때 'a'반환
//5 16자 이상이면 15자 나머지 제거
//6 만약 문자의 길이가 2이하면 마지막 문자 반복
function solution(new_id){
  var answer = [];
  const len = new_id.length;

  if(new_id === ''){
    return 'a';
  }
  for(let i =0;i<len;i++){
    //1.소문자 
    var lower = new_id.toLowerCase();
    
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^+<>@\#$%&\\\=\(\'\"]/gi;
    //2.위의 (.-_)특수문자일때 
    if(reg.test(lower)){
      // 그 특수문자 제거
      var t= lower.replace(reg,'');
      console.log(t)
      //처음과 끝
      if(t[0] === '.'){
        var result = t.substring(1,t.length);
      }else if(t[t.length - 1] === '.'){
        result = t.substring(0,t.length);
      }
    result.filter((v,i,self)=>self.indexOf(v) === i).join('')

     console.log(result)
      // t = [...t].filter((v,i,self)=>self.indexOf(v) === i).join('')
      //처음과 끝 제거
      
      // if(result.length <= 2){
      //   result = result+result[result.length-1];
      //   console.log(result)
      // }
     return result;
    }else{
       // 그 특수문자 제거
       var t= lower.replace(reg,'');
      console.log(t)
      //처음과 끝
      if(t[0] === '.'){
        var result = t.substring(1,t.length);
      }else if(t[t.length - 1] === '.'){
        result = t.substring(0,t.length);
      }
    }
  }

}
console.log(solution("...!@BaT#*..y.abcdefghijklm"))
// console.log(solution("z-+.^."))
// console.log(solution("=.="))
// console.log(solution(	"123_.def"))
// console.log(solution("abcdefghijklmn.p"))