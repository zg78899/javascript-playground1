// function a(x, y, z) {
//   console.log(this, x, y, z);
//   var b = {
//     c: 'eee'

//   };
//   a.call(b, 1, 2, 3);
//   a.apply(b, [1, 2, 3]);

//   var c = bind(b);
//   c();
//   var d = bind(b, 1, 2);
//   d(3);
// }

function getGrade(score){
  if(score===100){
    return 'A+';

  }else if(score>=90){
    return 'A'
  }
}
const grade=getGrade(90)
console.log(grade);


function getGrade(score){
  if(score===100)return 'A+';
  else if(score>=90) return 'A';
  else if(score>=85) return 'B+';
  else if(score>=80) return 'B';
}
const grade=getGrade(90);
console.log(grade);


function numberOfPrime(n){
  let result=0;
  let arr=[];
  for(i=2;i<n;i++){
    let devided=0;
    for(let j=2;j<i;j++){
      if(i%j===0){
        devided+=1;
      }
    }
    if(devided===0){
      arr.push(i);
    }
  }
  result=arr.length;
  return result;

}