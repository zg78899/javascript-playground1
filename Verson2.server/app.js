const express = require('express');
const app = express();

let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascirpt', completed: false }
];

// 루트 폴더의 이름을 퍼블릭으로 할거야.
// 미들웨어 딱 1번만 실행됨.
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 // for parsing

// app.get('/', (req, res) => {
//   res.send('hello world!');
// });

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  console.log(req.body);
  todos = [req.body, ...todos];
  res.send(todos);
});

// app.patch('/todos/:id([0-9])', (req, res) => {
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params; // req.params.id
  const { completed } = req.body; // req.body.completed;
  todos = todos.map((todo) => (todo.id === +id ? { ...todo, completed } : todo));
  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params; // req.params.id
  todos = todos.filter((todo) => todo.id !== +id);
  res.send(todos);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});