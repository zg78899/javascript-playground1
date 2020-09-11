function solution(record){
  var answer = [];
  const strBuffer  =['님이 들어왔습니다.','님이 나갔습니다.'];
  let users ={};

  //배열을 역순으로 정룔
  record.reverse();
  record.forEach(value=>{
    const array = value.split(' ');
    if(array.length > 2 && !users[array[1]]){
      users[array[1]] = array[2];
    }
  });
  console.log(users);
  record.reverse();

  record.forEach((value)=>{
    const array = value.split(' ');
    if(array[0] === 'Enter'){
      answer.push(users[array[1]]+strBuffer[0]);
    }else if(array[0] === 'Leave'){
      answer.push(users[array[1]]+strBuffer[1]);
    }
  });
  return answer;
}

console.log(solution(
  ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))


  function solution(record){
    var answer = [];
    const strBuffer = ['님이 들어왔습니다.','님이 나갔습니다.'];
    let users = {};

    record.reverse();
    record.forEach((value)=>{
      const arr = value.split(' ');
      if(arr.length >2 && !users[arr[1]]){
        users[arr[1]] = arr[2]
      };
    });
    
    record.reverse();

    record.forEach((value,index)=>{
      const arr = value.split(' ');
      if(arr[0] === 'Enter'){
        answer.push(users[arr[1]]+strBuffer[0]);
      }else if(arr[0] === 'Leave'){
        answer.push(users[arr[1]]+strBuffer[1]);
      }
    });
    return answer;

  }