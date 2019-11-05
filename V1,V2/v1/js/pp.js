let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $checkbox = document.querySelector('.complete-all > .checkbox');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

const render = () => {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const getTodos = () => {
  // 서버로부터 todos 취득
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  // descending sort by id
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
  //1.render하기 직전에 데이터를 받자마자 sort(원본을 바꾼다.숫자가 들어있다면 비교함수 사용.id기준으로 sort한다.)를 한다. 
  //2.addTodo 할때 sort한다.
  console.log('[getTodos]', todos);//제대로 작동하는지 보기위해서
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  console.log('[addTodo]', todos);//제대로 작동하는지 보기위해서
};

const toggleCompleted = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  console.log('[toggleCompleted]', todos);//제대로 작동하는지 보기위해서
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  console.log('[removeTodo]', todos);//제대로 작동하는지 보기위해서
};

const toggleCompletedAll = checked => {
  todos = todos.map(todo => ({ ...todo, completed: checked }));
  console.log('[toggleCompletedAll]', todos);//제대로 작동하는지 보기위해서
};

const removeCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
  console.log('[removeCompleted]', todos);//제대로 작동하는지 보기위해서
};

// Event bindings
// load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
window.onload = () => {
  getTodos();
  render();
};

// todo 추가
$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;

  target.value = '';
  addTodo(content);
  render();
};

// todo.completed 토글
$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};

// todo 제거
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;

  removeTodo(target.parentNode.id);
  render();
};

// todo.completed 일괄 토글
$checkbox.onchange = ({ target }) => {
  toggleCompletedAll(target.checked);
  render();
};

// todo.completed 일괄 제거
$clearCompleted.onclick = () => {
  removeCompleted();
  render();
};