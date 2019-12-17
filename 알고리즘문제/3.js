function alphaString46(s) {

  return /^[0-9]{4}$/.test(s) || /^[0-9]{6}$/.test(s);

  //1. if(!s)return false;
  // return /^\d{4,6}$/.test(s);
  
  // 2.const regexp = /^[0-9]{4,6}$/;
  // return regexp.test(s);

  // console.log(typeof s);
  //3. const aaa = s + '';
  // if ((aaa.length === 4 || aaa.length === 6) && !isNaN(aaa)) {
  //   return true;
  // }
  // return false;
}
alphaString46();

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false