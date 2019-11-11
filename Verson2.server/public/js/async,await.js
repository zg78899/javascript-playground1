let todos = [];

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');

const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
      <input class="checkbox" id="ck-${id}" type="checkbox"${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;

  });

  $todos.innerHTML = html;
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
}

const getTodos = async () => {
  try {
    const res = await axios.get('/todos')
    todos = res.data;
    render();
  } catch (e) {
    console.log(e);
  }


  // ajax.get('/todos')
  //   .then(res => todos = res)
  //   .then(render)
  //   .catch(err => console.error(err));

  // fetch('/todos', { method: 'GET' })
  //   .then(res => res.json())
  //   .then(_todos => todos = _todos)
  //   .then(render)
  //   .catch (err=> console.error(err));

  // axios.get('/todos')
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(err));


};
const addTodo = async (content) => {
  try {
    const res = await axios.post('/todos', { id: generateId(), content, completed: false })
    todos = res.data;
    render();
  } catch (e) {
    console.log(e);
  }

  // ajax.post('/todos', { id: generateId(), content, completed: false })
  // .then(res => todos = res)
  //   .then(render)
  //   .catch(err => console.error(err));

  // fetch('/todos', {
  //   method: 'POST',
  //   headers: { 'Content-type': 'apllication/json' },
  //   body: JSON.stringify({ id: generateId(), content, completed: false })
  // })
  //   .then(res => res.json())//res
  //   .then(_todos => todos = _todos)
  //   .then(render)
  //   .catch (err => console.error(err));

  // axios.post('/todos',{id:generateId(),content,completed:false})
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(err));

};

const toggleCompleted = async (id) => {

  try {
    const completed = todos.find(todo => todo.id === +id).completed;
    const res = await axios.patch(`/todos/${id}`, { completed: !completed });
    todos = res.data;
    render();
  } catch (e) {
    console.error(e);
  }


  // ajax.patch(`/todos/${id}`, { completed })
  //   .then(render)
  //   .then(res => todos = res)
  //   .then(render)
  //   .catch(err => console.error(err));

  // fetch(`/todos/${id}`,{
  //   method:'PATCH',
  //   headers:{'Content-type':'apllication/json'},
  //   body:JSON.stringify({completed:!completed})
  // })
  // .then(res=>res.json())
  // .then(_todos=>todos=_todos)
  // .then(render)
  // .catch(err=>console.error(err));

  // axios.patch(`/todos/${id}`,{completed})
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(err));

};
const removeTodos = async (id) => {
  try {
    const res = await axios.delete(`/todos/${id}`)
    todos = res.data
    render();
  } catch (e) {
    console.error(e);
  }

  // }
  // ajax.delete(`/todos/${id}`)

  //   .then(res => todos = res)
  //   .then(render)
  //   .catch(err => console.error(err));

  // fetch(`/todos/${id}`,{ method:'DELETE'})
  // .then(res=>res.json())
  // .then(_todos=>todos=_todos)
  // .then(render)
  // .catch(err=>console.error(err));

  // axios.delete(`/todos/${id}`)
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(err));
};

window.onload = getTodos;

$input.onkeyup = ({ target, keyCode }) => {
  const content = $input.value.trim();
  if (content === '' || keyCode !== 13) return;
  target.value = '';
  addTodo(content);
  // ajax.post('/todos',{id:generateId(),content,completed:false},render);
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  // const completed = !todos.find(todo=>todo.id=== +id).completed;
  toggleCompleted(id);
  // ajax.patch(`/todos/${id}`,{completed},render);

};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  removeTodos(id);
  //  ajax.del(`/todos/${id}`,render);
};
