function solution(land,height){
  function bfs(i,j,group,group_cnt){
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];
    const q = [];
    q.push([i,j]);

    while(q.length > 0){
      const [ni,nj] = q.shift();
      group_cnt[ni][nj] = group_cnt;
      for(let t = 0;t<4;t++){
        const di = ni+ dx[t];
        const dj = nj + dy[t];
        if(di >=0 && di < land.length && dj >= 0 && dj <land[0].length && group[di][dj] === 0 && 
          Math.abs(land[ni][nj] - land[di][dj]) <= height){
            q.push([di,dj]);
            group[di][dj] = group_cnt;
          }
      }
    }
  }
  function find_parent(node,parent){
    if(node === parent[node]){
      return +node;
    }
    else{
      const p = find_parent(parent[node],parent);
      parent[node] = p;
      return +p;
    }
  }
  function union_find(n1,n2,parent){
    n1 = fin_parent(n1,parent);
    n2 = find_parent(n2,parent);
    parent[n2] = n1;
  }
  // 이동가능한 구역끼리 grouping
  var group = Array(land.length).fill().fill.map(_ => Array(land.length).fill(0));
  var group_cnt = 1;
  for(let i =0;i< land.length;i++){
    for(let j = 0;j< land[0].length;j++){
      if(group[i][j] === 0){
        bfs(i,j,group,group_cnt);
        group_cnt = group_cnt +1;
      }
    }
  
  
  //각 구역을 연결하는 최솟값 찾기;
  let ladder = [];
  for(let i = 0;i< land.length;i++){
    for(let j =0;j< land[0].length;j++){
      const nx = i+1;
      const nj = j+1;
      if(nx < land.length && group[i][j] !== group[nx][j]){
        const [left,right ] = [Math.min(group[i][j],group[nx][j]),Math.max(group[i][j],group[nx][j])];
        const key = [left,right].join(',');
        if(!ladder[key]){
          ladder[key] = 100000;
          ladder[key] = Math.min(ladder[key],Math.abs(land[i][j] - land[nx][j]));
        }
      }if(ny < land[0].length && group[i][j] !== group[i][ny]){
        const [left,right] = [Math.min(group[i][j],group[i][ny]),Math.max(group[i][j],group[i][ny])];
        const key = [left,right].join(',');
        if(!ladder[key]){
          ladder[key] = 100000;
          ladder[key] = Math.min(ladder[key],Math.abs(land[i][j] - land[i][ny]));
        }
      }
    }
  }
  let sorted_ladder =[];
  for(let key in ladder){
    sorted_ladder.push([key,ladder[key]]);
  }
  sorted_ladder.sort((a,b)=> a[1] - b[1]);

  //사다리로 연결
  let answer =0;
  const parent = Array(land.length * land[0].length).fill().map((_,i)=> i);
  
  for(let n of sorted_ladder){
    const [left,right] = n[0].split(',');
    if(find_parent(left,parent) !== find_parent(right,parent)){
      union_find(left,right,parent);
      answer += n[1];
    }
    
  }
  return answer;
  

  
}

// function solution(land, height) {

//   function bfs(i, j, group, group_cnt) {
//       const dx = [1, 0, -1, 0];
//       const dy = [0, 1, 0, -1];
//       const q = [];
//       q.push([i, j]);

//       while(q.length > 0) {
//           const [ni, nj] = q.shift();
//           group[ni][nj] = group_cnt;
//           for(let t=0; t<4; t++) {
//               const di = ni + dx[t];
//               const dj = nj + dy[t];
//               if(di >= 0 && di < land.length && dj >= 0 && dj < land[0].length && 
//                  group[di][dj] == 0 && 
//                  Math.abs(land[ni][nj] - land[di][dj]) <= height) {
//                   q.push([di, dj]);
//                   group[di][dj] = group_cnt;
//               }
//           }
//       }
//   }

//   function find_parent(node, parent) {
//       if(node == parent[node]) {
//           return +node;
//       }
//       else {
//           const p = find_parent(parent[node], parent);
//           parent[node] = p;
//           return +p;
//       }
//   }

//   function union_find(n1, n2, parent) {
//       n1 = find_parent(n1, parent);
//       n2 = find_parent(n2, parent);
//       parent[n2] = n1;
//   }

//   // 이동 가능한 구역끼리 grouping
//   var group = Array(land.length).fill().map(_ => Array(land.length).fill(0));
//   var group_cnt = 1;
//   for(let i=0; i<land.length; i++) {
//       for(let j=0; j<land[0].length; j++) {
//           if(group[i][j] == 0) {
//               bfs(i, j, group, group_cnt);
//               group_cnt = group_cnt + 1;
//           }
//       }
//   }

//   // 각 구역을 연결하는 최솟값 찾기
//   let ladder = [];
//   for(let i=0; i<land.length; i++) {
//       for(let j=0; j<land[0].length; j++) {
//           const nx = i + 1;
//           const ny = j + 1;
//           if(nx < land.length && group[i][j] != group[nx][j]) {
//               const [left, right] = [Math.min(group[i][j], group[nx][j]), Math.max(group[i][j], group[nx][j])];
//               const key = [left, right].join(',');
//               if(!ladder[key]) 
//                   ladder[key] = 100000;
//               ladder[key] = Math.min(ladder[key], Math.abs(land[i][j] - land[nx][j]));
//           }
//           if(ny < land[0].length && group[i][j] != group[i][ny]) {
//               const [left, right] = [Math.min(group[i][j], group[i][ny]), Math.max(group[i][j], group[i][ny])];
//               const key = [left, right].join(',');
//               if(!ladder[key]) 
//                   ladder[key] = 100000;
//               ladder[key] = Math.min(ladder[key], Math.abs(land[i][j] - land[i][ny]));
//           }
//       }
//   }

//   let sorted_ladder = [];
//   for(let key in ladder) {
//       sorted_ladder.push([key, ladder[key]]);
//   }
//   sorted_ladder.sort((a, b) => a[1] - b[1]);

//   // 사다리로 연결
//   let answer = 0;
//   const parent = Array(land.length*land[0].length).fill().map((_, i) => i);

//   for(let n of sorted_ladder) {
//       const [left, right] = n[0].split(',');
//       if(find_parent(left, parent) != find_parent(right, parent)) {
//           union_find(left, right, parent);
//           answer += n[1];
//       }
//   }
//   return answer;
// }