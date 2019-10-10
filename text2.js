var line = 5;
var star = '';

for (var i = 0; i < line; i++) {
  for (var j = 0; j <= i; j++) {
    star += ' ';
  }
  for (var j = 0; j < 2 * (line - i) - 1; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);