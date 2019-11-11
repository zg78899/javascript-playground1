import { get } from "https";

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() { return 'eat'; }

//   move() { return 'move'; }
// }

// class Bird extends Animal {
//   fly() { return 'fly'; }
// }

// const bird = new Bird(1, 5);
// const animal = new Animal(2, 6);

// console.log(bird);
// console.log(animal);
// console.log(animal.eat()) ;
// console.log(animal.move()) ;
// console.log(animal.weight) ;
// console.log(animal.fly());
// // Bird {age: 1, weight: 5}

// const b=true;
// b.


let todos = [];
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input');

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
  const req = (method, url, payload, f) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        f(JSON.parse(xhr.response));
      } else {
        throw new Error('Error');
      }
    };
  };
  return {
    get(url, f) {
      req('GET', url, f);
    },
    post(url, payload, f) {
      req('POST', url, payload, f)
    },
    patch(url, payload, f) {
      req('PATCH', url, payload, f);
    },
    del(url, f) {
      req('DELETE', url, f);
    }
  }

})();
const getTodos = () => {
  get('/todos', render);
};

window.onload = () => {
  getTodos();
};
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}
$input.onkeyup = ({ target, keyCode }) => {
  const content = $input.nodeValue.trim();
  if (!content || keyCode != 13) return;
  target.value = '';
  post('.todos', { id: generateId(), content, completed: false }, render);
};
$todos.onchacnge = ({ target }) => {
  const id = target.parentNode.id;
  const completed = !todos.find(tofo => todo.id === +id).completed;
  patch(`/todos/${id}`, { completed }, redner);
};
$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  const id = target.parentNode.id;
  del(`/todos/${id}`, render);
};
const express=require('express');
const app=express();
let todos=[
  {id:1,content:'HTML',completed:false},
  {id:2,content:'CSS',completed:true},
  {id:3,content:'Javascript',completed:false}
];
app.use(express.stataic('public'));
app.use(express.json());
app.use(express.urlencoded({extends:true}));

app.get('/todos',(req,res)=>{
  res.send();
});
app.post('/todos',(req,res)=>{
  todos=[req.body,...todos];
  res.send(todos);
});
app.patch('/todos/:id',(req,res)=>{
  const id=req.params.id;
  const completed =req.body.completed;
  todos=todos.map(todo=>todo.id === +id);
  render.send(todos);
});

app.del('/todos/:id',(req,res)=>{
const id= req.params.id;
todos=todos.filter(todo=>todo.id !== +d);
res.send(todos);

});
app.listen(3000,()=>{
  console.log('Servering is on posrt 3000');

});