let data = ['  + -- + - + -  ','  + --- + - +  ','  + -- + - + -  ','  + - + - + - +  '];
let result ;
for(var r of data){
 result += String.fromCharCode(parseInt(data.replace(/ /g,'').replace(/ \+/g,1).replace(/-/g,0)));
}
return result;

console.log(result);