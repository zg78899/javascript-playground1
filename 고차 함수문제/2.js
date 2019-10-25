const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValue(keys) {
  return todos.map((item) => item[keys]);
}
console.log(getValue('id'));
console.log(getValue('content'));
console.log(getValue('completed'));


// function getValue(keys) {
//   return todos.map((item,i) =>i );
// }
// console.log(getValue('id'));
// console.log(getValue('content'));
// console.log(getValue('completed'));
