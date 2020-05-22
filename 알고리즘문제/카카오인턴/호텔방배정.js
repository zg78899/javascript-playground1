// function solution(k,room_number){
//   let answer=[];
//   for(let i =0;i<room_number.length;i++){
//     if(answer.some(element=>element === room_number[i])){
//       if(k !== room_number[i]){
//         room_number[i] +=1;
//       }else{
//         room_number[i] = 1
//       }
//     i--;

//     }else{
//       answer.push(room_number[i])
//     }
//   }
//   return answer;
// }
// console.log(solution(6,[1,3,4,1,3,1]))

const solution =(k,room_number) => {
  const number =[...room_number];
  const answer = new Set([]);
  console.log(answer);
  for(let i=0;i<room_number.length;i++){
    if(!answer.has(number[i])){
      answer.add(number[i]);
    }else{
      k === number[i] ? number[i] =1: number[i]+=1;
      i--;
    }
  }
  return [...answer];
}
console.log(solution(6,[1,3,4,1,3,1]))


const node = new Map();

const solution =(k,room_number)=>{
return room_number.map(number=>find(k,number));
}
const find =(k,number)=>{
  const getNumber = node.get(number);
  if(!getNumber){
    number === k? node.find(number,1) :node.set(number,number+1);
    return number;
  }
  return find(k,getNumber);
}
console.log(solution(6,[1,3,4,1,3,1]));

const node = new Map();
const solution = (k,room_number)=>{
  return room_number.map(number=>find(k,number));
}
const find=(k,number)=>{
  const getNumber = node.get(number);
  if(!getNumber){
    number === k ? node.get(number,1):node.set(number,number+1);
    return number;
  }
  return find(k,getNumber);
}

const solution = (k,roomNumbers)=>{
  const used = new Map();
  return roomNumbers.map(number=>findRoom(number,used));
};
function findRoom(room,used){
  if(used.get(room) === undefined){
    used.set(room,room+1);
    return room;
  }
  let next = findRoom(used.get(room),used);
  used.set(room,next+1);
  return next;
}

const solution =(k,roomNumbers)=>{
  const used = new Map();
  return roomNumbers.map(number =>findRoom(number,used));

}
const findRoom=(room,used)=>{
  if(used.get(room) === undefined){
    used.set(room,room+1);
    return room;
  }
  let next = findRoom(used.get(room),used);
  used.set(room,next+1);
  return next;
}


const solution = (k,roomNumbers)=>{
  const used = new Map();
  return roomNumbers,map(number=>findNumber(number,used));

}
const findNumber=(room,used)=>{
  if(used.get(room) === undefined){
    used.set(room,room+1);
    return room;
  }
  let next = findRood(used.get(room),used);
  used.set(room,next+1);
  return next;
}


const solution =(k,roomNumbers)=>{
  const used = new Map();
  return roomNumbers.map(number=>findNumbers(number,used));
}
const findNumbers =(room,used)=>{
  if(used.get(room) === undefined){
    used.set(room,room+1);
    return room;
  }
  let next = findNumber(used.get(room),used);
  used.set(room,next+1);
  return next;
}
const solution =(k,roomNumber)=>{
  const used = new Map();
  roomNumber.map(number =>findNumber(number,used));
}
const findNumber = (room,used)=>{
  if(used.get(room) === undefined){
    used.set(room,room+1);
    return room;
  }
  let next = findNumber(used.get(room),used);
  used.set(room,next+1);
  return next;
}





const node = new Map();
const solution =(k,room_number)=>{
  return room_number.map(number=>find(k,number));
}
const find =(k,number)=>{
  const getNumber = node.get(number);
  if(!getNumber){
    k === number ? node.get(number,1):node.set(number,number+1);
    return number;
  }
  return find(k,getNumber);
}

const node = new Map();
const solution=(k,roomNumber)=>{
  return roomNumber.map(room =>find(k,room));
}
const find =(k,room)=>{
  const getRoom = node.get(room);
  if(!getRoom){
    k === room? node.get(room,1):node.set(room,room+1);
    return room;
  }
  return find(k,getRoom);
}

const solution =(k,num)