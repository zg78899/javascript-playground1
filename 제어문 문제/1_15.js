var line = 5;
var star = '';

for (var i = 0; i < line; i++) {
  for (var j = 0; j < line - i; j++) {
    star += ' ';
  }
  for (var j = 0; j < 2 * i + 1; j++) {
    star += '*'
  }
  star += '\n';
}
console.log(star);