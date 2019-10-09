var line = 5;
var star = '';

for (var i = 0; i < line; i++) {
  for (var j = 0; j < line - i; j++) {
    star += '*';
  } 
  star += '\n';
}
console.log(star);