let todos = [];

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completedAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

const render = function () {
  let html = '';
  todos.forEach(todo => {
    html += `
      <li id="${todo.id}" class="todo-item">
         <input class="checkbox" id="ck-${todo.id}" type="checkbox"${todo.completed ? 'checked' : ''}>
         <label for="ck-${todo.id}">${todo.content}</label>
         <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;

  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const getTodo = function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  // todos.sort((todo1, todo2) => todo2.id - todo1.id);
  //1.render하기 직전에 데이터를 받자마자 sort(원본을 바꾼다.숫자가 들어있다면 비교함수 사용.id기준으로 sort한다.)를 한다. 
  //2.addTodo 할때 sort한다.
  render();
};
const addTodo = function (e) {
  const content = $input.value;
  if (e.keyCode !== 13 || content.trim() === '') return;
  $input.value = '';
  const MAX_id = Math.max(0, ...todos.map(todo => todo.id)) + 1;
  todos = [...todos, { id: MAX_id, content: content, completed: false }];
  todos.sort(function (a, b) { return b.id - a.id });
  render();
};

const toggleCompleted = function (e) {
  console.log(e.target.checked);
  const id = e.target.parentNode.id;
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);
  render();
};

const removeTodo = function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  const id = e.target.parentNode.id;
  todos = todos.filter(todo => todo.id !== +id);
  render();
};

//전부 선택하는 경우
const completedAll = function (e) {
  // if (e.target.checked) {
  // console.log(e.target.checked);
  todos = todos.map(todo => ({ ...todo, completed: e.target.checked }));
  // }
  render();
};

//선택한것 제거 숫자 변경
const removeCompleted = function (e) {
  
  todos = todos.filter(todo => !todo.completed);

  render();
};

//Events
window.onload = getTodo;
$input.onkeyup = addTodo;
$todos.onchange = toggleCompleted;
$todos.onclick = removeTodo;
$completedAll.onchange = completedAll;
$clearCompleted.onclick = removeCompleted;



