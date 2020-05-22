let 첫번째밭 = [
  [1,0,0,0,0],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1]
];
let 두번째밭 = [
  [0,0,0,0,1],
  [0,0,0,0,3],
  [0,0,0,0,4],
  [0,2,0,0,2],
  [4,5,0,2,0]
];

let sample = [];

for(let i =0;i<첫번째밭.length;i++){
  sample[i] = new Array(첫번째밭[0].length);
}

for(var i =0;i<두번째밭.length;i++){
  for(var j =0;j<두번째밭[0].length;j++){
  sample[i][j] = 두번째밭[j][두번째밭.length -1 -i];//즉 smaple행렬에는 방향을 바꿔준 두번째밭 행렬이 들어간다.
  sample[i][j] += 첫번째밭[i][j];
 
  }
}
console.log(sample);
let result ='';
for(var v of sample){
  result += String.fromCharCode(parseInt(v.join(''),8)); 
}
console.log(result);
//첫번째밭과 두번째밭은 방향이 다르다.
//방향을 같게 만들어 줘야한다.
//0 ,4 -> 0,0
//1 ,4 -> 0,1
//2 ,4 -> 0,2
//3 ,4 -> 0,3
//4 ,4 -> 0,4
let 첫번째밭 = [
  [1,0,0,0,0],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1],
  [0,0,1,0,1]
];
let 두번째밭 =[
  [0,0,0,0,1],
  [0,0,0,0,3],
  [0,0,0,0,4],
  [0,2,0,0,2],
  [4,5,0,2,0]
];

let sample = [];
for(let i =0;i<첫번째밭.length;i++){
sample[i] = new Array(첫번째밭[0].length);
}
for(var i =0;i<두번째밭.length;i++){
  for(var j =0;j <두번째밭[0].length;j++){
    smaple[i][j] = 두번째밭[j][두번째밭.length - 1 -i];
    sample[i][j] += 첫번째밭[i][j];
  }
}
let result ='';
for(var v of sample){
  result += String.fromCharCode(parseInt(v.join(''),8));
}
console.log(result);


 let 첫번째밭=[
   [1,0,0,0,0],
   [0,0,1,0,1],
   [0,0,1,0,1],
   [0,0,1,0,1],
   [0,0,1,0,1]
 ];
 let 두번째밭 = [
   [0,0,0,0,1],
   [0,0,0,0,3],
   [0,0,0,0,4],
   [0,2,0,0,2],
   [4,5,0,2,0]
 ];
let sample = [];
for(let i =0;i<첫번째밭.length;i++){
  smaple[i] = new Array(첫번째밭[0].length);
}
for(var i =0;i<두번재밭.length;i++){
  for(var j = 0;j<두번째밭[0].length;i++){
     smaple[i][j] = 두번째밭[j][두번째밭.length - 1 - i];
     smaple[i][j] += 첫번째밭[i][j];
  }
}
let result = '';
for(var r of smaple){
  result += String.fromCharCode(parseInt(v.join(''),8));
}
console.log(result);