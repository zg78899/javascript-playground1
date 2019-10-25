let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function toggleCompletedById(id) {
  todos.map((item) => {
    if (item.id === id) {
      
      Object.assign(item, { completed: false });
      // console.log(item);
    }
  });
}
toggleCompletedById(2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/


let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function toggleCompletedById(id) {
  todos.map((item) => item.id === id ? (Object.assign(item,{completed:!item.completed})) : item);    
  todos.map((item) => item.id === id ? {...item,completed:!item.completed}:item);    
}
toggleCompletedById(2);
console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
