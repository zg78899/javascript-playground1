// function solution(dirs){
//   let answer =[];
//   let gps = [0,0];
//   dirs.split('').forEach((v)=>{
//     let ret = false;
//     const pre_gps = gps.concat();
//     if(v === 'U' && gps[1] <5){
//       gps[1] +=1;
//       ret = true;
//     }
//     else if(v === 'D' && gps[1] > -5){
//       gps[1] -= 1;
//       ret = true;
//     }else if(v === 'R' && gps[0] <5){
//       gps[0] +=1;
//       ret = true;
//     }else if(v === 'L' && gps[0] > -5){
//       gps[0] -= 1;
//       ret =true;
//     }
//     //길은 양 방향이 아닌 단 방향으로 취급
//     const filter = answer.filter(item =>{
//       return item[0] === pre_gps[0] && item[1] === pre_gps[1] && item[2] == gps[0] && item[3] == gps[1] || item[0] == gps[0] && item[1] == gps[1] && item[2] == pre_gps[0] && item[3] == pre_gps[1]
//     });
//     if(ret && filter.length === 0){
//       answer.push(pre_gps.concat(gps));
//     };
//   });
//   return answer.length;
// }

function solution(dirs){
  let answer =[];
  let gps =[0,0];

  console.log(dirs.split('').forEach((v)=>{
    let ret = false;
    const pre_gps = gps.concat();
    if(v === 'U' && gps[1] < 5){
      gps[1]+= 1;
      ret = true;
    }
    else if(v === 'D' && gps[0] > -5){
      gps[1] -= 1;
      ret = true;

    }
    else if(v === 'R' && gps[0] <5){
      gps[0] +=1;
      ret = true; 
    }else if(v === 'L' && gps[0] > -5){
      gps[0] -=1;
      ret = true;
    }
    //같은 양 방향이 아닌 단 방향으로 취급
    const filter = answer.filter(item => {
      return item[0] === pre_gps[0] && item[1] === pre_gps[1] && item[2] === gps[0] && item[3] === gps[1] || item[0] === gps[0] && item[1] === gps[1] && item[2] === pre_gps[0] && item[3] === pre_gps[1]
    });
    console.log(filter)
    if(ret && filter.length  === 0){

      answer.push(pre_gps.concat(gps));
      console.log(pre_gps.concat(gps))
    }
  }));
  return answer.length;
}

// function solution(dirs){
//   let answer =[];
//   let gps = [0,0];
//   dirs.split('').forEach((v)=> {
//     let ret =false;
//     const pre_gps = gps.concat();
//     if(v === 'U' && gps[1] <5){
//       gps[1] +=1;
//       ret = true;
//     }else if(v === 'D' && gps[1] >-5){
//       gps[1] -=1;
//       ret = true;
//     }else if(v === 'R' && gps[0] <5){
//       gps[0] +=1;
//       ret = true;

//     }
//     else if(v === 'L' && gps[0] > -5){
//       gps[0] -=1;
//       ret = true;
//     }
//     const filter = answer.filter(item =>{
//       return item[0] === pre_gps[0] && item[1] === pre_gps[1] && item[2] === gps[0] && item[3] === gps[1] || item[0] === gps[0] && item[1] === gps[1] && item[2] ===pre_gps[0] && item[3] === pre_gps[1];
//     });

//   if(ret && filter.length === 0){
//     answer.push(pre_gps.concat(gps))
//   }
//   })
// }


console.log(solution("ULURRDLLU"))