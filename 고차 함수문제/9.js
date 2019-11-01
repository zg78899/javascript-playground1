let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  // return Math.max(...todos.map((item) => item.id));
  return Math.max.apply (null, todos.map(item => item.id));
  

}

console.log(getMaxId()); // 3