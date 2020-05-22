function getMaxValueFromArray(array) {
  return Math.max(...array.map((item) => item));
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  return Math.min(...array.map(((item) => item)));
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

