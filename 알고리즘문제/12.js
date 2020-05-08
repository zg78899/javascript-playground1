function uniq(array) {
  return array.reduce((pre, cur, i, self) => {

    if (self.indexOf(cur) === i) {
      console.log(self.indexOf(cur))
      pre.push(cur);
    }
    console.log(pre);
    return pre;
  }, []);
}
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

function uniq(array){
  return array.filter((v,i,self)=>self.indexOf(v) === i);
};
