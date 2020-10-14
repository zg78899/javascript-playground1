function solution(n,arr1,arr2){
  let answer = [];
  for(let i=0;i<n;i++){
    let result = arr1 |arr2;
    answer.push(result.toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '))
  }
  return answer;

}









function solution(n,arr1,arr2){

  var answer = [];
  var a = arr1.map(a=>a.toString(2));
  var b = arr2.map(b=>b.toString(2));

for(let i = 0;i<n;i++){
  var num = add(a,b,n);
  answer.push(num);  
}
return answer;
}
function add(a1,a2,len){
  var value1 = '0'.repeat(len- a1.length)+a1;
  var value2 =  '0'.repeat(len - a2.length)+a2;
  var str ='';
  for(let i =0;i<n;i++){
    str +=( value1[i] !== '0' || value2[i] !== '0') ? '#' :' ';
  };
  return str;
}

