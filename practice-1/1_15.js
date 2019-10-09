
var star = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 4 - i; j++) {
    star += ' ';
  } for (var j = 0; j < 2 * i + 1; j++) {
    star += '*';
  }
  star+='\n';
}
console.log(star);