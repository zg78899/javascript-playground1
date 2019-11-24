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

app.patch('/todos', (req, res) => {
  const { completed } = req.body; // req.body.completed;
  todos = todos.map((todo) => ({ ...todo, completed }));
  res.send(todos);
});

// app.patch('/todos/:id([0-9])', (req, res) => {
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params; // req.params.id
  const { completed } = req.body; // req.body.completed;
  todos = todos.map((todo) => (todo.id === +id ? { ...todo, completed } : todo));
  res.send(todos);
});

app.delete('/todos/completed', (req, res) => {
  todos = todos.filter((todo) => !todo.completed);
  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {//id는 completed는 문자이기 때문에 숫자는 처리하지않는다.
  const { id } = req.params; // req.params.id
  todos = todos.filter((todo) => todo.id !== +id);
  res.send(todos);
});

// app.delete('/todos/:id(0-9)+', (req, res) => {//id따라서 정규 표현식을 사요아는 방법이 있고, 순서를 바꾸는 방법이 있다.
//   const { id } = req.params; // req.params.id
//   todos = todos.filter((todo) => todo.id !== +id);
//   res.send(todos);
// });

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});



let todos;
const $button=document.querySelector('.buttons');

const ajax=(()=>{
  const req=(url,method,payload)=>{
    fetch ('url',{
      method,
      headers:{'content-type':'application/json'},
      body:JSON.stringify(payload)
    });
    return {
      get(url){
        return req(url);
      },
      post(url,payload){
        return req(url,payload);
      },
      patch(url,payload){
        return req(url,payload);
      },
      delete(url,payload){
        return req(url,payload);
      };
    };
  };

})();
$button.addEventListener('click',()=>{
  addTodo();
});
const getTodo=()=>{
  ajax.get('/todos','GET')
  .then(item=>toods=item.json());
  .then(todos=>console.log(todos));
  .then(render);
}
const addTodo=()=>{
  ajax.post('/todos','POST',{id:4,content:'HTML',completed:false})
  .then(item=>todos=item.json())
  .then(toods=console.log(toods));
}

const ajax=(()=>{
  const req=(method,url,payload)=>{
  return new Promise((resolve,reject)=>{
  const xhr=new XMLHttpRequest();
  xhr.open(method,url);
  xhr.setRequestHeader('content-type','application/json');
  xhr.send(JSON.stringify(payload));

  xhr.onreadystatechange=()=>{
    if(xhr.readyState !== XMLHttpRequest.DONE)return;

    if(xhr.status === 200){
      resolve(JSON.parse(xhr.response));

    }else{
      reject(new Error('ERROR'));
    }
  };
  });
  };
  return {
    get(url){
      return req('GET',url);
    },
    post(url,payload){
      return req('POST',url,payload);
    },
    patch(url,payload){
      return req('PATCH',url,payload);
    },
    delete(url){
      return req('DELETE',url);
    }

  };
})();

ajax.get('/todos')
.then(todos=>Math.max(0,...todos))
.then(id=>ajax.delete(`/todos/${id}`))
.then(console.log);

ajax.get('/todos')
.then(todos=>Math.max(0,...todos.map(todo=>todo.id)))
.then(id=ajax.delete(`/todos/${id}`))
.then(console.log);

ajax.get('/todos')
.then(todos=>Math.max(0,...todos.map(todo=>todo.id)));
.then(id=>ajax.delete(`/todos/${id}`))
.then(console.log)

let todos=await ajax.get('/todos');
const id= Math.max(0,...todos.map(todo=>todo.id))
todos=await ajax.delete(`/todos/${id}`);
console.log(todos);


ajax.get('/todos')
.then(todos=>Math.max(0,...todos.map(todo=>todo.id)))
.then(id=>ajax.delete(`/todos/${id}`))
.then(console.log)


(async()=>{

  let toods=await ajax.get('/todos');
  const id=Math.max(0,...toods.map(todo=>todo.id));
  toods=await ajax.delete(`/toods/${id}`);
  console.log(todos);
})();
(async()=>{
  let todos=await ajax.get('/toods')
  const id= Math.max(0,...todos.map(todo=>todo.id))
  todos= await ajax.delete(`/todos/${id}`)
  console.log(todos);

})();
(async()=>{
  let todos= await ajax.get('/todos');
  const id= Math.max(0,...todos.map(todo=>todo.id));
  todos= await ajax.delete(`/todos/${id}`);
  console.log(todos);

})();

