//one line flatten
function flatten(arr){
  return arr.reduce((acc,e)=>acc.concat(e),[]);
}


function faltten1(arr){
  return [].concat.apply(null,arr);
}
console.log(faltten1([1,2,3,3]))

// deep line flatten
 function flatetnDeep(arr){
   return arr.reduce(
     (acc,e)=>Array.isArray(e)?
     acc.concat(flatetnDeep(e)):acc.concat(e),[]);

 }

 function flattenDeep(arr){
   return arr.concat((acc,e)=>{
     return Array.isArray(e)?
     acc.concat(flattenDeep(e)):
     acc.concat(e) 
   },[]);
 }

const flattenDeep1 =
 arr =>
 arr.redece((a,b)=>a.concat(flattenDeep1(b)) ? flattenDeep1(b): b,[]); 

 function flatten(arr){
   return arr.reduce((a,b)=>{
     return a.concat(Array.isArray(b)) ? 
     faltten1(b): b
   },[]);
 }
 
 function solution(arr){
   return arr.reduce((a,c)=>{
     return a.concat((Array.isArray(b)))?
     solution(b):b
   },[]);
   
 }