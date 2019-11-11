// const o = { name: 'LEE', gender: 'male', age: 20 };

// const strObject = JSON.stringify(o);
// console.log(typeof strObject, strObject);
// //객체를 json 형식의 문자열로

// const strPrettyObject = JSON.stringify(o, null, 2);
// console.log(typeof strPrettyObject, strPrettyObject);
// //객체를 json형식의 문자열로 prettify
// function filter(key, value) {
//   return typeof value === 'number' ? undefined : value;

// }
// const strFilterObject = JSON.stringify(o, filter, 2);
// console.log(typeof strFilterObject, strFilterObject);

// const arr = [1, 5, 'false'];

// const strArray = JSON.stringify(arr);
// console.log(typeof strArray, strArray);
// //배열객체를 문자열로

// function replaceToUpper(key, value) {
//   return value.toString().toUpperCase();//모든 값을 대문자로 반환한다.

// }
// const strFilterArray = JSON.stringify(arr, replaceToUpper);
// console.log(typeof strFilterArray, strFilterArray);

// const o = { name: 'Lee', gender: 'male', age: 20 };

// const strObject=JSON.stringify(o);
// console.log(typeof strObject,strObject);

// const arr=[1,5,'false'];

// const strArray=json.stringify(arr);
// console.log(typeof strArray,strArray);

// const obj=JSON.parse(strObject);
// console.log(typeof obj,obj);

// const objArray=JSON.parse(strArray);
// console.log(typeof objArray,objArray);

// const todos=[
//   {id:1,content:'HTML',completed:false},
//   {id:2,content:'CSS',completed:true},
//   {id:3,content:'Javascript',completed:false},
// ];

// console.log(typeof todos)

// const str=JSON.stringify(todos);
// console.log(typeof str,str);

// const parsed=JSON.parse(str);
// console.log(typeof parsed,parsed);
const express = reuire('express');
const app = express();

let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

app.listen(3000, () => {
  console.log('Servering is on port 3000');
});
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/todos', (req, res) => {
  res.send(todos);
});
app.post('/todos', (req, res) => {
  console.log(req.body);
  todos = [req.body, ...todos];
  res.send(todos);
});
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params.id;
  const { completed } = req.body;
  todos = todos.map((todos) => (todo.id === +id ? { ...todos, completed }): todo);
  res.send(todos);
});
app.delete('/todos/:id'.(req, res)=> {
  const { id } = req.params.id;
  todos=todos.filter(todos => todo.id !== +id);
  res.send(todos);
});

app.post('/todos', (req, res) => {
  todos = [req.body, ...todos];
  res.send(todos);
});
app.patch('todos/:id', (req, res) => {
  const id = req.params.id;
  const completed = req.body;
  todos = todos.map(todo => todo.id === +id ? { ...todo.completed } : todo);
  res.send(todos)
});
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.send(todos);
});

let todos = [];
const render = data => {
  todos = data;
  let html = ''
  todos.forEach(({ id, content, completed }) => {
    html += `
  <li id="${id}">
    <label>
    <input type='checkbox' class='cb' ${completed ? 'checked' : ''}>
    <span class='content'>${content}<span>
    </label>
    <button class='remove'>X</button>
</li>`;
  });
  $todos.innerHTML = html;
}

const get = (url.f)=> {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      f(JSON.parse(xhr.response));
      render();
    } else {
      throw new Error('ERROE');
    }
  };
  const post = (url.f)=> {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
        render();
      } else {
        throw new Error('ERROE');
      }
    };
  };
  const patch = (url.f)=> {
    const xhr = new XMLHttpRequest();
    xhr.open('PATCH', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
        render();
      } else {
        throw new Error('ERROR');
      }
    };
  };
  const del = (url.f)=> {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', url);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
        render();
      } else {
        throw new Error('ERROE');
      }
    };
  };


  const getTodos = () => {
    get('/todos', render);
  };
  window.onlaod = () => {
    getTodos();
  };
  const generateID = () => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
  $input.onkeyup = ({ target, keCode }) => {
    const content = $input.value.trim();
    if (content === '' || keyCode !== 13) return;
    target.value = '';
    post('/todos', { id: generateID(), content, completed: false }, render);
  };

  $todos.onchange = ({ target }) => {
    const id = target.parentNode.id;
    completed: !todos.find(todo > todo.id === +id).completed;
    patch(`/todos/${id}`, { completed }, render);
  };
  $todos.onclick = ({ target }) => {
    if (!target.classList.contains('remove')) return;

    const id = target.parentNode.id;
    del(`/todos/${id}`, render);
  };

  const express = require('express');
  const app = express();

  let todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ];
  appp.use(express.static('public'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/todos', (req, res) => {
    res.send(todos);
  });
  app.post('/todos', (req, res) => {
    todos = [req, body, ...todos];
    res.send(todos);
  });
  app.patch('/todos/:id', (req, res => {
    const id = req.params.id;
    const completed = req.body.completed;
    todos = todos.map(todo => todo.id === +id ? { ...todo, completed } : todo);
    res.send();
  });
  app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== +id);
    res.send(todos);
  });
  app.listen(3000, () => {
    console.log('Servering is on port 3000');
  });

  let todos = [];
  const $todos = document.querySelector('.todos');
  const $input = document.querySelector('.input-todos');

  const render = data => {
    todos = data;
    let html = '';
    todos.forEach(({ id, content, completed }) => {
      html += `<li id="${id}" class="todo-item">
    <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <button class="remove-todo">X</button>
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
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
            render();
          } else {
            rejrct(new Error('Error'));
          }
        };
      };
    });

    req('GET', '/todos');

    .then(res => todos = res)
    .then(render)
    .catch(err => console.error(err));

  return {
    get(url, f) {
      req('GET', url, f);
    },
    post(url, payload, f) {
      req('POST', url, payload, f);
    },
    patch(url, payload, f) {
      req('PATCH', url, payload, f);
    },
    del(url, f) {
      req('DELETE', url, f);
    }
  }
}) ();

const getTodos = () => {
  get('/todos', render);
}

window.onload = () => {
  getTodos();
};
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}
$input.onkeyup = ({ target, keyCode }) => {
  const content = $input.value.trim();
  if (!contnet || keyCode !== 13) return;
  target.value = '';
  post('/toods', { id: generateId(), content, completed }, render);
};
$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(todo => todo.id === +id).completed;
  patch(`/todos/${id}`, { completed }, render);
};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  del(`/todos/${id}`, render);
}
