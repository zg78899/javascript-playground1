function solution(m,n,board){
   board  = board.map(line=> line.split(''));
   let pang = new Set();
   while(true){
     for(let i =0;i+1<m;i++){
       for(let j =0;j+1 <n;j++){
         if(!board[i][j]){
           continue;

         }
         getPang(i,j);
       }
     }
     if(!pang.size){
       break;
     }
     del([...pang].map(e=>e.split(',')));
     pang.clear();
     fall();
   }
  return board.reduce((cnt,row)=>cnt+row.reduce((acc,cur)=> !cur ? acc +1:acc,0));

  function getPang(i,j){
    if(board[i][j] === board[i+1][j] &&
      board[i][j] === board[i][j+1] &&
      board[i][j] === board[i+1][j+1]){
        pang.add([i,j].join());
        pang.add([i+1,j].join());
        pang.add([i,j+1].join());
        pang.add([i+1,j+1].join());

      }
  }
  function del(panged){
    while(panged.length){
      const [x,y] = panged.pop();
      board[x][y] = 0;
    }
  }
  function fall(){
    for(let j = 0;j<n;j++){
      let y = board.length - 1;
      for(let i =m-1;0<i;i--){
        if(!board[i][j] && board[i - 1][j]){
          board[y--][j] = board[i-1][j];
          board[ i -1][j] = 0;
        }
        if(board[i][j] && !board[i - 1][j]){
          y = i-1;
        }
      }
    }
  }
}
