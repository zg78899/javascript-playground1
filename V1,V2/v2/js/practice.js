let todos = [];
let navState ='all'; //'all'/'active'/'completed'

const $nav=document.querySelector('.nav');
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completedAll=document.querySelector('.complete-all >.checkbox');
const $clearCompleteAll=document.querySelector('.clear-completed');
const $activeTodo=document.querySelector('.active-todos');
const $completedTodo=document.querySelector('.completed-todos');

const render =()=> {
  let html = '';

  //필터가 복사이다.
const _todos=todos.filter(({completed})=>(navSatate==='all' ? true :(navState==='active'? !completed : completed))

  todos.forEach(todo => {
    html += `
    <li id="${todo.id}" class="todo-item">
      <input class="checkbox" id="ck-${todo.id}" type="checkbox"${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;  
  });

  $todos.innerHTML = html;

  $activeTodo.textContent=todos.filter(todo=>todo.completed).length;
  $completedTodo.textContent=todos.filter(todo=>!todo.completed).length;
};

const getTodos = ()=> {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'HTML', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ];
  todos.sort((todos1, todos2) => todos2.id - todos1.id);
};

const generateId = () => { todos.length ? Math.max(...todo.map(todo=>todo.id)) + 1 : 1 }

const addTodo = (content) => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};
const toggleCompleted = (id) => {
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);
};
const removeTodos=(id)=>{
  todos=todos.filter(todo=>todo.id !== +id);
};
const toggleCompletedAll=(checked)=>{
todos=todos.map(todo => ({...todo, completed:checked}));
};

const clearCompletedAll=()=>{
  todos=todos.filter(todo=> !todo.completed);
};
const changeNav=(id)=>{
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active',$navItem.id===id);
   });
   navState = id; 
};

//Event 이벤트
window.onload = () => {
  getTodos();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  //화살표함수를 사용할때 this을 사용하면 곤란한 경우가 발생할수있다.
  const content = $input.value.trim();
  if (keyCode !== 13 || content === '') return;
  target.value = '';
  addTodo(content);
  render();
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};
$todo.onclick = ({ target }) => {
  if (target.classList.contains('remove-todo')) return;
  removeTodos(target.parentNode.id);
  render();
};

$completedAll.onchange=({target})=>{
toggleCompletedAll(target.checked);
render();
};

$clearCompleteAll.onclick=()=>{
  clearCompletedAll();
  render();
};

$nav.onclick=({target})=>{
  if(target.classList.contains('nav'))return;
  changeNav(target.id);
  render();
};



