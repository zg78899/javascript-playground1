let s = new Set('abcdeeeeee');

s.add('f');

console.log(s.size);
for(let variable of s){
  console.log(variable);
}
let ss = new Set('abcdeeeeee'.split(''));
console.log(ss);


console.log(ss.delete('b'))
console.log(ss.has('a'))
console.log(ss.clear());
console.log(ss);
