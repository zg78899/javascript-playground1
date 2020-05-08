function solution(board,moves){
  const basket =[];
  let result = 0;
  moves.forEach(v=>{
    const doll = pickup(board,v-1);
    if(doll){
      if(basket[basket.length -1] === doll){
        basket.pop();
        result+=2;
      }else {
        basket.push(doll);
      }
    }
  });
  return result;
}
function pickup(board,index){
  const newBoard = board;
  for(let i =0;i<newBoard.length;i++){
    if(newBoard[i][index] !== 0){
      const doll = newBoard[i][index];
      newBoard[i][index] = 0;
      return doll;
    }
  }
}
function solution(board,moves){
  var count =0;
  var stack =[];
  for(var i=0;i<moves.length;i++){
    var now = moves[i] -1;
    for(verj=0;j<board.length;j++){
      if(board[j][now] !== 0){
        if(stack[stack.length -1] === board[j][now]){
          stack.pop();
          count+=2;
        }else{
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}

function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}


function solution(board,moves){
  let stack =[];
  let count =0;
  for(let i =0;i<moves.length;i++){
    let now = moves[i]-1;
    for(let j=0;j<board.length;j++){
      if(board[j][now] !== 0){
        if(satck[stack.length -1] === board[j][now]){
          stack.pop();
          count+=2;
        }else{
          stack.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
}


const solution =(board.moves) => {
  const stack =[];
  const changeBoard =zip(...arr);
  let count =0;
  for(let i =0;i<moves.lengtj;i++){
    const move= moves[i]-1;
    while(1){
      const doll = changeBoard[move].shift();
      if(doll === undefined) break;
      if(doll > 0){
        if(stack.length > 0 && stack[stack.length -1] === doll){
          stack.pop();
          count +=2;
        }else stack.push(doll);
        break;
      }
    }
  }
  return count;
};

const zip=(arr,...arrs)=>{
return arr.map((val,i)=>arrs.reduce((a,arr)=>[...a,arr[i],val]));
}



function solution(board,moves){
  let stack =[];
  let count =0;
  moves.forEach(v=>{
    const doll = pickup(board, v-1);
    if(doll){
      if(stack[stack.length -1] !== 0){
        stack.pop();
        count+=2;
      }else stack.push(doll);
    }
  });
  return count;
}

function pickup(board,index){
  const newBoard = board;
  for(let i=0;i<newBoard.length;i++){
    if(newBord[i][index] !== 0){
      const doll = newBoard[i][index];
      newBoard[i][index] = 0;
      return doll;
    }
  }
}

function solution(board,moves){
  let stack = [];
  let count = 0;
  for(let i=0;i<moves.length;i++){
    const move = moves[i] -1;
    for(let j=0;j<board.legnth;j++){
      
      if(board[j][move] !== 0){
        if(satck[stack.length -1] ===board[j][move]){
          stack.pop();
          count+=2;
        }else {
          satck.push(board[j][move]);
        }
        board[j][move] = 0;
        break;
      }
    }
  }
  return count;
}