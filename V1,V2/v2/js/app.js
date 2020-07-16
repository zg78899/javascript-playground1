let todos = [];
let $navId = 'all';

const $nav = document.querySelector('.nav');

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completedALL = document.querySelector('.complete-all>.checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');


const render = function () {
  let tempTodo = todos;
  seperateTab($navId);
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

  todos = tempTodo;

};

const getTodo = function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
  //1.render하기 직전에 데이터를 받자마자 sort(원본을 바꾼다.숫자가 들어있다면 비교함수 사용.id기준으로 sort한다.)를 한다. 
  //2.addTodo 할때 sort한다.
  render();
};

const seperateTab = () => {
  if ($navId === 'all') return;
  if ($navId === 'active') {
    todos = todos.filter(todo => !todo.completed);
  } else {
    todos = todos.filter(todo => todo.completed)
  }
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

const toggleCompleted = id => {
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);
};

const removeTodos = id => {
  todos = todos.filter(todo => todo.id !== +id);
};
const toggleCompletedAll = checked => {
  todos = todos.map(todo => ({ ...todo, completed: checked }));
};
const removeCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
};

const changeTab = (target) => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem === target);

    if ($navItem.classList.contains('active')) $navId = $navItem.id;
    console.log($navId);
  });
};


///Event
window.onload = () => {
  getTodo();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = $input.value.trim();
  if (keyCode !== 13 || content === '') return;

  target.value = '';
  addTodo(content);
  render();
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
}

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  removeTodos(target.parentNode.id);
  render();
};

$completedALL.onchange = ({ target }) => {
  toggleCompletedAll(target.checked);
  render();
};

$clearCompleted.onclick = () => {
  removeCompleted();
  render();
};

$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  changeTab(target);
  render();
};




let todos = [];
let $navId = 'all';

const $nav = document.querySelector('.nav');
const $todos = document.querySelector('.todos');
const $completedALL = document.querySelector('.complete-all > .checked');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');


const render = () => {
  let html = '';
  seperateTab($navId);
  let tempTodo = todos;
  todos.forEach(todo => {
    html += `
    <li id="${todo.id}" class="todo-item">
       <input class="checkbox" id="ck-${todo.id}" type="checkbox"${todo.completed ? 'checked' : ''}>
       <label for="ck-${todo.id}">${todo.content}</label>
       <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(todo=>todo.completed).length;
  $activeTodos.textContent = todos.filter(todo=>!todo.completed).length;
  todos = tempTodo;
}
const seperateTab =()=>{
if($navId === 'all')return;
if($navId === 'active'){
  todos = todos.filter(todo=>!todo.compelted);
}else{
  todos = todos.filter(todo => todo.compelted);
}
}
const getTodo =()=>{
 todos=[
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
 ];
 todos.sort((todo1,todo2)=>todo2 - todo1);
 render();
}
const generateId = ()=> todos.length ? Math.max(...todos.map(todo=>todo.id))+1:1;

const addTodo =(content)=>{
todos = [{id:generateId(),content,completed:false},...todos];
}
const toggleCompleted =(id)=>{
todos = todos.map(todo=>todo.id == +id ? {...todo,compelted:!todo.completed}:todo);
}
const removeTodos = (id)=>{
  todos = todos.filter(todo => todo.id !== +id);
}
const toggleCompletedAll = (checked) =>{
todos = todos.map(todo=>({...todo,compelted:checked}));
}
const removeCompleted = () =>{
  todos = todos.filter(todo =>todo.compelted);
}

const changeTab = (target)=>{
  [...$nav.children].forEach(navItem=>{
    target.classList.toggle('active', navItem = target);
    if(navItem.classList.contains('active')) $navId = navItem.id;
  })
}

window.onload = ()=>{
  getTodo();
  render();
}
$input.onkeyup =({target,keyCode})=>{
const content = $input.value.trim();
if(keyCode !== 13 || target.value === '')return;
target.value='';
addTodo(content);
render();
}

$todos.onchange =({target})=>{
toggleCompleted(target.parentNode.id);
render();
}
$todos.onclick = ({target})=>{
  if(!target.classList.contains('remove-todo'))return;
  removeTodos(target.parentNode.id);
  render();
}
$completedALL.onchange = ({target})=>{
  toggleCompletedAll(target.checked);
  render();
}
$clearCompleted.onclick =()=>{
  removeCompleted();
  render();
}
$nav.onclick = ({target})=>{
if(target.classList.contains('nav'))return;
changeTab(target);
render();
}



let todos = [];
let $navId = 'all';

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completedALL = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');

const $nav = document.querySelector('.nav');

const render = ()=>{
  let tempTodo = todos;
  seperateTab($navId);
  let html ='';
  todos.forEach(todo=>{
    html += `
     <li id=${todo.id} class="todo-item">
      <input class="checkbox" type="checkbox"${todo.compelted ? 'checked' :''} id="ck-${todo.id}">
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
     </li>
    `;
  });
  html.innerHTML = html;
  $activeTodos.textContent = todos.filter(todo =>todo.compelted).length;
  $completedTodos.textContent = todos.filter(todo=>todo.compelted).length;
  todos = tempTodo;

};
const seperateTab = ($navId) =>{
  if($navId === 'all')return;
  if($navid === 'active'){
    todos = todos.filter(todo=>!todo.comeplted);
  }else{
    todos = todos.filter(todo =>todo.comeplted);
  }
}
const getTodo = () =>{
  todos= [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  todos.sort((todo1,todo2)=>todo2.id - todo1.id);
  render();
};
const generateId = ()=> todos.length ? Math.max(...todos.map(todo=>todo.id))+1 : 1;
const addTodo = (content)=>{
  todos = [{id:generateId(),content,comeplted:false},...todos];
};

const toggleCompleted = (id)=>{
  todos = todos.map(todo=>todo.id === +id ? {...todo,comeplted:!todo.comeplted}:todo);
};
const removeTodos = (id)=>{
  todos = todos.filter(todo=>todo.id !== id);
}
const toggleCompletedAll = (checked)=>{
  todos = todos.map(todo => ({...todo,comeplted:checked}));
}
const removeCompleted = ()=>{
  todos = todos.filter(todo =>!todo.comeplted);
}
const changeTab =(target)=>{
  [...$nav.children].forEach(navItem=>{
    navItem.classList.toggle('active',navItem = target);
    if(navItem.classList.contains('active')){
      $navId = navItem.id;
    }
  });
}

window.onload = () =>{
  getTodo();
  render();
};

$input.onkeyup = ({target,keyCode})=>{
const content = $input.value.trim();
if(target.value =='' || keyCode !== 13)return ;
target.value = '';
addTodo(content);
render();
}

$todos.onchange = ({target})=>{
toggleCompleted(target.parentNode.id);
render();
}
$todos.onclick = ({target})=>{
  if(!target.classList.contains('remove-todo'))return;
  removeTodos(target.parentNode.id);
  render();
}
$completedALL.onchange = ({target})=>{
  toggleCompletedAll(target.checked);
  render();
}
$
$clearCompleted.onclick = ()=>{
removeCompleted();
render();
};

$nav.onclick = ({target})=>{
if (target.classList.contains('nav'))return;
changeTab(target);
render();
}