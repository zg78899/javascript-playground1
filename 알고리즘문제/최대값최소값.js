let a = [1,2,23,4,1,12,1,241];
a.sort((a,b)=>a-b);
a[a.length -1];

a = Math.max(...a);
Math.max.apply(null,a);

console.log(a);
//최대값
let m = 0;
 for(const variable of a){
   if(variable > m){
     m = variable;
   }
 }
 //최소값
 let a =[10,20,30,1,2,3,5,9,11];
 let n = 999;
 for(const variable of a){
   if(variable < n){
     n = variable;
   }
 }
 console.log(n) //1;

 let arr =[6,5,4,3,2,1];
 const reducer =(acc,cur)=> acc+cur;
 const reducer =(acc,cur)=> acc-cur;
 //최대 
 const reducer =(acc,cur)=> acc >cur? acc :cur;
 //최소
 const reducer =(acc,cur)=> acc<cur ? acc :cur;

arr.reduce(reducer);
