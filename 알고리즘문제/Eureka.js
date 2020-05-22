let cross = [
  [
    [3,0,1,1,8],
    [5,0,4,5,4],
    [1,5,0,5,1],
    [1,2,1,0,1],
    [0,2,5,1,1]
  ],
  [
    [1,2,0,3,3],
    [1,2,0,2,4],
    [1,2,0,2,4],
    [4,2,0,0,1],
    [8,4,1,1,0]
  ]
];
corss = cross.flat();

// //연습 데이터
let c = [
  [3, 0, 1, 1 , 8],
  [5, 0, 4, 5, 4],
  [1, 5, 0, 5, 1],
  [1, 2, 1, 0, 1],
  [0, 2, 5, 1, 1]
];
//정방향과 역방행이 존재한다.
let 가중치 = Array(5).fill(0).map(() => Array(5).fill(0));
console.log(가중치);
for (var i = 0; i < c.length; i++) {
  //row
  for (var j = 0; j < 5; j++) {
    //column
    if (i === 0 && j === 0) {
      가중치[0][0] = c[0][0]; 
    } else if (i === 0) {
      가중치[i][j] = 가중치[i][j - 1] + c[i][j];
    } else if (j === 0) {
      가중치[i][j] = 가중치[i - 1][j] + c[i][j];
    } else {
      가중치[i][j] = Math.min(가중치[i][j - 1], 가중치[i - 1][j]) + c[i][j];
    }
  }
}
console.log(가중치)

let 좌표저장 =
  Array(5).fill(0).map(() => Array(5).fill(0).map(() => Array(2).fill(0)));
console.log(좌표저장);
for (var i = 0; i < c.length; i++) {
  for (var j = 0; j < 5; j++) {
    if (i === 0 && j === 0) {
      가중치[0][0] = c[0][0];
      좌표저장[0][0][0] = i;
      좌표저장[0][0][1] = j;
    } else if (i === 0) {
      가중치[i][j] = 가중치[i][j - 1] + c[i][j];
      좌표저장[i][j][0] = i;
      좌표저장[i][j][1] = j - 1;
    } else if (j === 0) {
      가중치[i][j] = 가중치[i - 1][j] + c[i][j];
      좌표저장[i][j][0] = i - 1;
      좌표저장[i][j][1] = j;
    } else { 
      // 가중치[i][j] = Math.min(가중치[i][j - 1], 가중치[i - 1][j]) + c[i][j];
      if (가중치[i][j - 1] > 가중치[i - 1][j]) {
        가중치[i][j] = 가중치[i - 1][j] + c[i][j];
        좌표저장[i][j][0] = i - 1;
        좌표저장[i][j][1] = j;
      } else {
        가중치[i][j] = 가중치[i][j - 1] + c[i][j];
        좌표저장[i][j][0] = i;
        좌표저장[i][j][1] = j - 1;
      }
    }
  }
}
console.log(좌표저장);
console.log(cross);

가중치 = Array(cross.length).fill(0).map(()=>Array(5).fill(0));
좌표저장 = Array(cross.length).fill(0).map(()=>Array(5).fill(0).map(()=>Array(2).fill(0)));

console.log(가중치);
console.log(좌표저장);
for (var i = 0; i < cross.length; i++) {
  for (var j = 4; j > -1; j--) {
    if (i === 0 && j === 4) {
      가중치[0][4] = cross[0][4];
      좌표저장[0][4][0] = 99;
      좌표저장[0][4][1] = 99;
    } else if (i === 0) {
      가중치[i][j] = 가중치[i][j + 1] + cross[i][j];
      좌표저장[i][j][0] = i;
      좌표저장[i][j][1] = j + 1;
    } else if (j === 4) {
      가중치[i][j] = 가중치[i - 1][j] + cross[i][j];
      좌표저장[i][j][0] = i - 1;
      좌표저장[i][j][1] = j;
    } else { 
      // 가중치[i][j] = Math.min(가중치[i][j - 1], 가중치[i - 1][j]) + c[i][j];
      if (가중치[i][j + 1] > 가중치[i - 1][j]) {
        가중치[i][j] = 가중치[i - 1][j] + cross[i][j];
        좌표저장[i][j][0] = i - 1;
        좌표저장[i][j][1] = j;
      } else {
        가중치[i][j] = 가중치[i][j + 1] + cross[i][j];
        좌표저장[i][j][0] = i;
        좌표저장[i][j][1] = j + 1;
      }
    }
  }
}

console.log(가중치);
console.log(좌표저장);
let i_ = 0;
let j_ = 0;

for(var k =0;k<100;k++){
  if(i_ === 99 || j_ === 99){
    break;
  }
  if(k === 0){
    i_ = 좌표저장[cross.length -1][0][0];
    j_ = 좌표저장[cross.length -1][0][1];

  }else{
    i_ = 좌표저장[i_][j_][0];
    j_ = 좌표저장[i_][j_][1];


  }
  console.log(i_,j_);
}