function solution(s) {

  for (let i = 0; i <= s.length; i++) {
    let m = Math.floor(s.length / 2);
    if (s.length % 2) {
      return s[m];
    } else
      return s[m - 1] + s[m];
  }


  function solution (s){
    const m = Math.floor(s.length / 2);
     return s.length %2 ? s[m] : s[m -1],s[m];
    }