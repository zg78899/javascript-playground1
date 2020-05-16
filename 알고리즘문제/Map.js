//Map aand Set

// Map Set(중복을 허락하지 않는다.)

let m = new Map();

m.set('하나',1);
m.set(1,'하나');
m.set(true,1);
m.set(false,1);

console.log(m.get('하나'));
console.log(m.get(true));
console.log(m.has('하나'));
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);
console.log(m.size);


for(var variable of m){
  console.log(`m을 순회하고 있습니다.${variable[0]}`);
}

console.log(m.keys());
console.log(m.values());
console.log(m.entries())
//각각의 인덱스로 순회 가능한다.
let temp = new Map([[1,10],[2,20],[3,30],[4,40]]);
console.log(temp);

