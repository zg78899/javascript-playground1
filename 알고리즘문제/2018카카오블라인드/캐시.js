function solution(n,cities){
  let cache = [];
  let answer = 0;
  for(let i =0;i<cities.length;i++){
    const city = cities[i].toUpperCase();
    const idx = cache.indexOf(city);
    if(idx  !== -1){
      answer+=1;
      cache.splice(idx,1);
      cache.push(city)
    }else{
      answer+= 5;
      cache.push(city);
      if(n<cache.length){
        cache.shift();
      }
    }
  }
  return answer;
}


// function solution(n,cities){
//   let cache = new Set();
//   let answer = 0;
//   for(let i = 0;i<cities.length;i++){
//     const city = cities[i].toUpperCase();
//     if(cache.has(city)){
//       answer++;
//       cache.delete(city);
//       cache.add(city);
//     }else{
//       answer+=5;
//       cache.add(city);
//       if(n < cache.size){
//         cache.delete(cache.values().next().value);
//       }
//     }
//   }
//   return answer;
// }

 

console.log(
  solution(3,['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']))