var star = '';
var line = 5;

for (var i = line; i > 0; i--) {

  for (var j = line - i; j > 0; j--) {
    star += ' ';
  
  }

  for (var j = 2 * i - 1; j > 0; j--) {
    star += '*';
  }
  star += '\n';
}
console.log(star);