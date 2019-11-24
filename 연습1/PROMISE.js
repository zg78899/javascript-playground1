// import { log } from "util";

const promise = new Promise((resolve, reject) => {//프로미스는 new로 생성한 객체
  // 비동기 처리
  const random = Math.floor(Math.random * 10);
  setTimeout(() => {
    if (random >= 5) resolve(random);//인수로 성공한 값을 줌
    else reject(new Error('Error'))//실패한 이유를 담아준다.
  });
});
// console.log(typeof promise);
promise
  .then(res => console.log(res));//콜백의 인자로 성공했을때 인수로 넘어옴/catch 실패했을때 인수로 넘어옴
  .catch (err => console.log(err));


const p = new Promise((resolve, reject) = {
  // console.dir(p2)
  resolve(1);
});

 .then(num => ++num);//함수의 인수로 들어간다(num이라는 값에 1이 들어간다.),console.log는 가변인자 함수
//then은 프로미스를 반환한다. 콜백함수의 리턴값을 resolve값으로 사용한다.console.log undefined을 반환한다.undeifined을 가지고있는 프로미스가 객체가 생성이 된다.
//then 새롭게 만들어서 반환
.then()


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
  const _todos = todos.filter(({ completed }) => (navState === 'all' ? true : navState === 'active' ? completed : !completed));

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
//비동기함수가 프로미스를 반환하게 한다.
const ajax = (() => {

  const req = (method, url, payload) => {//req프로미스를 반환한다.
    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify(payload));

      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        }
      };
      xhr.onerror = () => {
        reject(new Error(xhr.status));
      };
    });
  };

  return {//콜백이 필요없어진다. f을 지운다.
    get(url) {
      return req('GET', url);//req가 프로미스를 반환한다. 따라서 명시적으로 프로미스 리턴.
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
  }
})();

// new Promise(()=>{
//   ajax.get()
// });
ajax.get('/todos')//서버가 파스한 리턴한 값이 /todos에 들어온다.
// console.dir(ajax.get('/todos'));
.then(todos=>todos.filter(todo=>todo.id === 1))//id의 값이 1인 todos객체만 들어간다.
.then(console.log)

const generateId = () => {

  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

const getTodos = () => {
  // try{
  //   const res=await axios.get('/todos')
  //   todos=res.data;
  //   render();
  // }catch(e)


  ajax.get('/todos')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));

  // fetch('/todos', { method: 'GET' })
  //   .then(res => res.json())
  //   .then(_todos => todos = _todos);
  //   .then(render);
  //   .catch (err=> console.error(err));

  //   axios.get('/todos')
  //   .then(res=>todos=res.data)
  //   .then(render)
  //   .catch(err=>console.error(err));


};
const addTodo = (content) => {
  // try{
  //   const res=await axios.post('/todos',{id:generateId(),content,completed:false})
  //   todos=res.data;
  //   render();
  // }catch(e)

  ajax.post('/todos', { id: generateId(), content, completed: false })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));

  // fetch('/todos',{
  //   method:'POST',
  //   headers:{'Content-type':'apllication/json'},
  //   body:json.stringify({id:generateId(),content,completed:false})
  // })
  // .then(res => res.json())//res
  // .then(_todos => todos = _todos)
  // .then(render);
  // .catch (err => console.error(err));

  // axios.post('/todos',{id:generateId(),content,completed:false})
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(err));

};

const toggleCompleted = (id) => {
  const completed = !todos.find(todo => todo.id === +id).completed;

  // try{ 
  //   const res=await axios.patch(`/todos/${id}`,{completed})
  //   todos=res.data;
  //   render();
  // }catch(e)


  ajax.patch(`/todos/${id}`, { completed })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));

  // fetch(`/todos/${id}`,{
  //   method:'PATCH',
  //   headers:{'Content-type':'apllication/json'},
  //   body:json.stringify({completed})
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
const removeTodos = (id) => {
  // try{
  //   const res=await axios.delete(`/todos/${id}`)
  //   todos=res.data
  //   render();
  // }catch(e){

  // }
  ajax.delete(`/todos/${id}`)
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));

  // fetch(`/todos/${id}`{method:'DELETE'})
  // .then(res=>res.json())
  // .then(_todos=>todos=_todos)
  // .then(render)
  // .catch(err=>console.error(err));

  // axios.delete(`/todos/${id}`)
  // .then(res=>todos=res.data)
  // .then(render)
  // .catch(err=>console.error(error));
};
const changeNav = (id) => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });
  navState = id;
};
const toggleCompletedAll = (completed) => {
  ajax.patch('/todos', { completed })
    .then(_todos = todos = _todos)
    .then(render)
    .catch(err => console.error(err));

};
const removeCompleted = () => {

  ajax.delete('/todos/completed')
    .then(_todos = todos = _todos)
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
  // ajax.post('/todos',{id:generateId(),content,completed:false},render);
};

$todos.onchange = ({ target }) => {
  const id = target.parentNode.id;
  // const completed = todos.find(todo => todo.id === +id).completed;
  toggleCompleted(id);
  // ajax.patch(`/todos/${id}`,{completed},render);

};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  removeTodos(id);
  //  ajax.del(`/todos/${id}`,render);
};
$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  changeNav(target.id);
};
$checkbox.onchange = ({ target }) => {
  toggleCompletedAll(target.checked);
};
$clearCompletedAll.onclick = removeCompleted;
};
const express=reuire('express');
const app=express();

let todos=[
  {id:1,content'HTML',completed:false},
  {id:2,content'CSS',completed:true},
  {id:3,content'Javascript',completed:false}
];
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencorded());

app.get('/todos',(req,res)=>{
  res.send(todos);
});
app.post('/todos',(req,res)=>{
  todos=[req.body,...todos];
  res.send(todos);
});


app.patch('/todos:id',(req,res)=>{
  const {id}=req.params;
  const {completed}=req.body;
  todos=todos.map(todo=>todo.id===id?({...todo,completed}):todo);
});
app.delete('/todos/completed',(req,res)=>{
  todos=todos.filter(todo=>!todo.completed);

});
app.delete('/todos/:id',(req,res)=>{
  const {id}=req.params;
  todos=todos.filter(todo=>todo.id !==id);
  res.send(todos);

}))

app.listen(3000,()=>{
  console.log('Servering is port 3000');
  
});

const express=require('express');
const app= express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencorded());

app.listen(3000,()=>{
  console.log('Servering is on port 3000');
  
});
app.get('/todos',(req,res)=>{
  res.send(todos)
});
app.post('/todos',(req,res)=>{
  todos=[req.body,...toods];
  res.send(todos);

});
app.patch('/todos',(req,res)=>{
  const {completed}=req.body;
  todos=todos.map(todo=>({...todos,completed}));
  res.send(todos);

});
app.patch('/todos/:id',(req,res)=>{
const {id}=req.params;
const {completed}=req.body;
todos=todos.map(todo=>todo.id === id?{...todos,completed}:todo);
res.send(todos);
});
app.delete('/todos/:id',(req,res)=>{
  const id=req.params;
  todos=todos.filter(todo=>todo.id !== id);
});

