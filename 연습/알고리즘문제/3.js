function alphaString46(s) {

  const aaa = s + '';
  
  if ((aaa.length === 4 || aaa.length === 6) && !isNaN(aaa)) {
    return true;
  }
  return false;
}
alphaString46();

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false