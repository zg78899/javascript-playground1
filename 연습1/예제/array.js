
let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
// console.log(todos.filter(item => item.completed).length);

todos = todos.filter(item => !(item.completed));
console.log(todos);


// const values=[1,2,3,4,5,6];

// console.log(Math.max(1,2,3));

// console.log(Math.max.apply(null,values));
// console.log(Math.max(...values));
// console.log(Math.min(...values));