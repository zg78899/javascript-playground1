
var star = '';
var line = 5;


for (var i = 0; i < line; i++) {
  for (var j = 0; j < line + 1; j++) {
    if (i >= j) {
      star += ' ';
    }

    else {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);