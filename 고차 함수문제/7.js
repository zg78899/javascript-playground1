// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function toggleCompletedAll() {
//   todos.map(item => {
//     if (item.completed === false) {
//       // console.log(item);
//       Object.assign(item, { completed: true });
//     }
//   });
// }

// toggleCompletedAll();

// console.log(todos);
// // /*
// // [
// //   { id: 3, content: 'HTML', completed: true },
// //   { id: 2, content: 'CSS', completed: true },
// //   { id: 1, content: 'Javascript', completed: true }
// // ]
// // */

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {


  // todos.map(item => Object.assign(item,{completed:true}));
  todos=todos.map(item => ({ ...item, completed: true }));
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/
