var person1={
  name:'lee'
};
var person2={
  name:'lee'
};
console.log(person1===person2);//다른 변수에 저장되는 값이기 때문에
console.log(person1.name===person2.name);//false;다른 메모리주소를 가지는 변수이지만 같은 객체를 참조값으로 가지기 때문