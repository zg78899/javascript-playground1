let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  todos = todos.filter(item => item.completed).length;
  return todos;
}

console.log(countCompletedTodos());
