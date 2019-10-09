var line = 5;
var star = ''

for (var i = 0; i < line; i++) {
  for (var j = 0; j < line; j++) {
    if (i >= j) {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);