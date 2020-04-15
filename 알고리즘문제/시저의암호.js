function solution(s,n){
  let arr =[];
  n = n % 26;
  for(let i= 0;i<s.length;i++){
    const word = s.charCodeAt(i);
    if(word === 32) arr.push(" ");
    else if(word>=65 && word<=95){
      if(word+n >90) arr.push(String.fromCharCode(word+n-26));
      else arr.push(String.fromCharCode(word+n));
    }else if(word>=97 && word<=122){
      if(word+n >122) arr.push(String.fromCharCode(word+n-26));
      else arr.push(String.fromCharCode(word+n));
    }
  }
  return arr.join('');
}