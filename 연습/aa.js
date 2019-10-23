const value = [1, 2, 3, 4, 5];

const average = value.reduce((pre, cur, i, self) => {
  if (i === self.length - 1) {
    return (pre + cur) / self.length;
  }
  return pre + cur;
});

console.log(average);

const sum = [1, 2, 3, 4].reduce((pre, cur, ii , self) => pre + cur);
console.log(sum);

