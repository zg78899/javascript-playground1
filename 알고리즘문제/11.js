// 11.palindrome(팰린드롬 / 회문)은 왼쪽에서 오른쪽으로 읽은 다음,
// 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다.
// 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라.
// 단, 반드시 1자 이상의 문자열을 인자로 전달한다.


function checkPalindrom(str) {
  const middle = parseInt(str.length / 2);
  console.log(middle);
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true

  