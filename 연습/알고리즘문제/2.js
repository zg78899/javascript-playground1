function getCount8() {
  let num = 0;
  for (let i = 1; i <= 10000; i++) {
    const strNum = i + '';
    // console.log(strNum);
    // console.log(strNum.length);

    for (let j = 0; j < strNum.length; j++) {
      // console.log(j);     
      if (strNum.charAt(j) === '8') {
        num += 1;
      }
    }
  }
  return num;
}
console.log(getCount8());
