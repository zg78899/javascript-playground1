// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
// function toggleCompletedById(id) {
//   todos.map((item) => {
//     if (item.id === id) {

//       Object.assign(item, { completed: false });
//       // console.log(item);
//     }
//   });
// }
// toggleCompletedById(2);
// console.log(todos);
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
 todos.map((todo) => todo.id === id ? (Object.assign(todo, { completed: !todo.completed })) : todo);
 todos.map((todo) => todo.id === id ? Object.assign({},todo, { completed: !todo.completed }) : todo);// 새로만드는 주소를 만든다.
  // todos.map((item) => item.id === id ? (Object.assign(item, { completed: !item.completed })) : item);
  todos=todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
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
