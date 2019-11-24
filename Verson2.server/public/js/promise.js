let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $checkbox = document.querySelector('.complete-all > .checkbox');
const $activeTodo = document.querySelector('.active-todos');
const $completedTodo = document.querySelector('.completed-todos');
const $clearCompletedAll = document.querySelector('.clear-completed > .btn');

const render = () => {
  const _todos = todos.filter(({ completed }) => (navState === 'all' ? true : navState === 'active' ? !completed : completed));

  let html = '';
  _todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
      <input class="checkbox" id="ck-${id}" type="checkbox"${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  $activeTodo.textContent = todos.filter(todo => !todo.completed).length;
  $completedTodo.textContent = todos.filter(todo => todo.completed).length;
};

const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(payload));

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error('Error'));
        }
      };
    });
  };
  return {
    get(url) {
      return req('GET', url);
    },
    post(url, payload) {
      return req('POST', url, payload);
    },
    patch(url, payload) {
      return req('PATCH', url, payload);
    },
    delete(url) {
      return req('DELETE', url);
    }
  };
})();
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};
const getTodos = () => {
  ajax.get('/todos')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
const addTodo = (content) => {
  ajax.post('/todos', { id: generateId(), content, completed: false })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
const toggleCompleted = (id) => {
  const completed = !todos.find(todo => todo.id === +id).completed;
  ajax.patch(`/todos/${id}`, { completed })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
const removeTodos = (id) => {
  ajax.delete(`/todos/${id}`)
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
const changeNav = (id) => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });
  navState = id;
};
const toggleCompletedAll = (completed) => {
  ajax.patch('/todos', { completed })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
const removeCompleted = () => {
  ajax.delete('/todos/completed')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};
window.onload = () => {
  getTodos();
};
$input.onkeyup = ({ target, keyCode }) => {
  const content = $input.value.trim();
  if (content === '' || keyCode !== 13) return;
  target.value = '';
  addTodo(content);
};
$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  toggleCompleted(id);
};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  removeTodos(id);
};
$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  changeNav(target.id);
  render();
};
$checkbox.onchange = ({ target }) => {
  toggleCompletedAll(target.checked);
};
$clearCompletedAll.onclick = () => {
  removeCompleted();
};

const getTodo=async ()=>{
try{
  const res=await axios.get('/todos');
  todos=res.data;
  render();

}catch(e){
console.log(e);
}
};

const addTodo=async (content)=>{
  try{
    const res=await axios.post('/todos',{id:generateId(),content,completed:false});
    todos=res.data;
    render();
  }catch(e){
    console.log(e); 
  }
};

const toggleCompleted=(id)=>{
  try{
    const res=await axios.patch(`/todos/${id}`,{completed:!completed})
    todos=res.data;
    render();
  }catch(e){
    console.log(e);
  }
}
const removeTodo=(id)=>{
  try{
    const res=await axios.delete(`/todos/${id}`)
    todos=res.data;
    render();
  }catch(e){
    console.log(e);
    
  }
}

(async()=>{
 let todos=await ajax.get('/todos');
 const id= Math.max(0,...todos.map(todo=>todo.id));
 todos= await ajax.delete(`/todos/${id}`);
 console.log(todos);
})();
