function solution(n,arr1,arr2){
  let answer1 =[];
  let answer2=[];
  const arr = new Array(n).fill(0);
  const strArr = arr.join('');
  for(let i =0;i<n;i++){
    const tarr1 =arr1[i].toString(2);
    const tarr2 =arr1[i].toString(2);

    if(n > tarr1.length ){
      answer1.push(strArr[i]+tarr1)
    }
    else{
      answer1.push(tarr1)
    }

    if(n> tarr2.length){
      answer2.push(strArr[i]+tarr2)
    }
    else{
      answer2.push(tarr2)
    }
  }
  
    
   

  
  
  for(let i =0;i<n;i++){
    
    for(let j=0;j<n;j++){
    console.log((parseInt(answer1[i][j])+parseInt(answer2[i][j])));
    }
  }

  
  

}
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));



function solution(n,arr1,arr2){
const answer =[];
for(let i =0;i<n;i++){
  let result_arr = arr1[i] | arr2[i];
  answer.push(result_arr.toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '));
  
}
return answer;
}
console.log(solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]));

function solution(n.arr1,arr2){
  const asnwer=[];
  for(let i =0;i<n;i++){
    let result_arr = arr1[i] |arr2[i];
    asnwer.push(result_arr.toString(2).padStart(n,'0').replace(/1/g,"#").replace(/0/g,' '));

  }
  return asnwer;
}


function solution(n, arr1, arr2) {
  var answer = [];
  let arr1_2 = arr1.map(element => element.toString(2)); //지도1를 2진수로 변환한다.
  let arr2_2 = arr2.map(element => element.toString(2)); //지도2를 2진수로 변환한다.
  let long = n; //가장 긴길이를 담을 그릇
  
  for(let i=0;i<arr1_2.length;i++){ //길이를 맞춰준다.
      if(long>arr2_2[i].length){
         console.log(arr2_2[i] = Array(long-arr2_2[i].length).fill("0").join("")+arr2_2[i]);
      }
      if(long>arr1_2[i].length){
          arr1_2[i] = Array(long-arr1_2[i].length).fill("0").join("")+arr1_2[i];
      }
  }
  
  for(let i=0;i<arr1_2.length;i++){ 
      let word = "";
      for(let j=0;j<arr1_2[i].length;j++){
          if(arr1_2[i][j]==="1"||arr2_2[i][j]==="1"){
              word+="#";
          }
          else{
              word+=" ";
          }
      }
      answer.push(word);
  }
  
  return answer;
}


function solution(n, arr1, arr2) {
  //toString(2) 2진수로 바꾼다.
  //replace(/1|0/g,element => +element ? "#" : " ") 1이면 "#"으로 아니면 " " 더한다.
 return arr1.map((value,index)=>length_same(n,(value|arr2[index]).toString(2)).replace(/1|0/g,element => +element ? "#" : " "));
} 

function length_same(n,word){
  return "0".repeat(n-word.length)+word; //길이를 맞춰주는 함수,,
}

function solution(n,arr1,arr2){
  let arr1_2 = arr1.map(element=>element.toString(2));
  let arr2_2 = arr2.map(element=>element.toString(2));
  const answer=[];
  for(let i =0;i<n;i++){
    if(n>arr2_2.length){
      arr2_2[i] = Array(arr2_2[i].length).fill('0').join('')+arr1_2[i];
    }
    if( n > arr1_2.length){
      arr1_2[i] = Array(arr1_2[i].length).fill('0').join('')+arr2_2[i];
    }
  }
  for(let i =0;i<n;i++){
    let word = '';
    for(let j=0;j<arr1_2.length;j++){
      if(arr1_2[i][j] === '1' | arr2_2[i][j]==='1'){
        word +='#';
      }else{
        word +=' ';
      }
    }
    answer.push(word);
  } 
  return answer;
  console.log(answer);
}

function solution(n,arr1,arr2){
  let arr1_1= arr1.map(element=>element.toString(2));
  let arr2_1= arr2.map(elemnet=>elemnet.toString(2));
  const answer=[];
  for(let i =0;i<n;i++){
    if(n>arr1_1.length){
      arr1_1[i] = Array(arr1_1.length).fill('0').join('')+arr2_1[i];
    }
    if(n>arr2_1.lengtj){
      arr2_1[i] = Array(arr2_1.length).fill('0').join('')+arr1_1[i];
    }
  }
  for(let i=0;i<n;i++){
    let word ='';
    for(let j =0;j<arr1_2.length;i++){
      if(arr1_1[i][j]==='1' | arr2_1[i][j]==='1'){
        word+='#';
      }else{
        word +=' ';
      }
    }
    answer.push(word);
  }
  return answer;

}

const arr =[1,2,3,4,5];
const abc =[2,3,4,5,6];
for(let i=0;i<arr.length;i++){
  const result = arr | abc;
  console.log(result);
}
