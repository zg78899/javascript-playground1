function nextSqaure(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return Math.pow(Math.sqrt(n) + 1, 2);
  }
  else {
    return 'no';
  }
}
console.log(nextSqaure());
console.log(nextSqaure(0));
console.log(nextSqaure(1));
console.log(nextSqaure(2));
console.log(nextSqaure(3));
console.log(nextSqaure(121));
console.log(nextSqaure(165));
console.log(nextSqaure(400));
