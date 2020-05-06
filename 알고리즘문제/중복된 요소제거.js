function solution(array){
  return array.filter((v,i,self)=>self.indexOf(v) === i);
}
function solution(array){
  return [...new Set(array)];
}


const set = new Set([1,2,3,4]);

set.forEach((v,v2,set)=>console.log(v,v2,set));


const set = new Set([1,2,,3,4]);

console.log(Symbol.iterator in set) //true;

for(const value of set){
  console.log(value)// 1 2 3 4
}
console.log([...set]); [1,2,3,4];

//교집합
Set.prototype.intersaction = function (set){
  const result = new Set();
  for(const value of set){
    if(this.has(value)) result.add(value);
  }
  return result;
}
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

setA.intersacton(setB);

Set.prototype.intercation = function (set){
  return new Set([...this].filter(v => set.has(v)));
};
const setA =new Set([1,2,3,4]);
const setB = new Set([2,4]);

//합집합
Set.prototype.union = function(set){
const result = new Set(this);

for(const value of set){
  result.add(value);
}
return result;
}

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.union(setB));
//
Set.union = function (set){
  return new Set([...this,...set]);
};
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

//치집합
Set.prototype.differece = function (set){
  const result = new Set(this);
  for(const value of set){
  return result.delete(value);
  }
  return result;
}
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.difference(setB));

Set.prototype.difference = function (set){
  return new Set([...this].filter(v=>!set.has(v)));
};
const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);

console.log(setA.difference(setB));

//상위
Set.prototype.isSuperset = function (set){
  for(const value of subset){
    if(!this.has(value))return false;
  };
  return true;
}

Set.prototype.isSuperset = function (set){
  const superArr = [...this];
  return [...subset].every(v => supersetArr.includes(v));
};

function solution(arr){
  return arr.filter((v,i,self>self.indexof(v) === i )
};

