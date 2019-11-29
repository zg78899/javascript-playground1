var x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

function onlyEven() {
  for (i = 9; i >= 0; i--) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}
onlyEven();


let i=9;
while(i>0){
  if(i%3==0){
    console.log(i);
  }
  i--;
};

var obj={
  name:'';
  sayName=function(name){
    console.log(this.name);
  }
}
var person={
  my-name:'lee';
}
person['my-name']='kim';
console.log(person['my-name']);


