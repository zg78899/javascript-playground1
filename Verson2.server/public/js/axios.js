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

const getTodos = () => {

    axios.get('/todos')
    .then(res=>todos=res.data)
    .then(render)
    .catch(err=>console.error(err));


  };
const addTodo = (content) => {

  ajax.post('/todos', { id: generateId(), content, completed: false })
  .then(res => todos = res)
    .then(render)
    .catch(err => console.error(err));
};

const toggleCompleted = (id) => {
  const completed = !todos.find(todo => todo.id === +id).completed;

  axios.patch(`/todos/${id}`,{completed})
  .then(res=>todos=res.data)
  .then(render)
  .catch(err=>console.error(err));

};
const removeTodos = (id) => {

  axios.delete(`/todos/${id}`)
  .then(res=>todos=res.data)
  .then(render)
  .catch(err=>console.error(err));
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
$todos.onchange = ({target})=>{
  const id = target.parentNode.id;11111
  toggleCompleted(id)
};
$todos.onclick=({target})=>{
  if(!(target.classList.contains('remove-todo')))return;
  const id = target.parentNode.id;
  removeTodos(id)
}

//////////////////////////////////////////////
axios.get(`/todos`,data,{
  onUploadProgress:(({total,loaded})=>{

  })
})
fetch(url)
.then(response=>{
  if(!(status >= 200) && status <300){
    return Promise.reject(new Error('Invalid reponse Error'))

  }
  return response;
})
.then(response=> response.json());

let url = 'http://www.naver.com';

let options = {
  method:'POST',
  mode:'cors',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json;charset-UTF-8'
  },
  body:JSON.stringify({
    property_one:value_one,
    property_tow:value_two
  })
};
let response = await fetch(url,options);
let responseOk = response && response.ok;
if(reponseOk){
  let data = await response.json();
}

let url= 'http://www.naver.con';
let options ={
  method:'POST',
  url:url,
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json;charset = UFT-8'
  },
  body:JSON.stringify({
    property_one:value_one,
    property_two:value_two
  })
};
let response = await axios(options);
let responseOk = reponse && reponse.status === 200 && response.statusText === 'Ok';
if(responseOk){
  let data = await response.date;
}


let todos = [];
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todos');

const render=()=>{
  let html = '';
  todos.forEach(({id,content,completed})=>{
    html +=`
    <li id="${id}" class="todo-item">
    <input class="checkbox" id="ck-${id}" type="checkbox"${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  $todos.innerHTML = html;
};

const ajax = (()=>{
const req = (method,url,payload)=>{
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload=()=>{
      if(xhr.status === 200){
        resolve(JSON.stringify(xhr.resonse));
      }else{
        reject(new Error('Error'));
      }
    }
  });
}
return {
  get(url){
    return req('GET',url);
  },
  post(url,payload){
    return req('POST',url,payload);
  },
  delete(url,payload){
    return req('PATCH',url,payload)
  },
  delete(url){
    return req('DELETE',url)
  }
}
})();

const generateId = ()=>{
  return Math.max(0,...todos.map(todo =>todo.id ))+1
}

const getTodo =()=>{
  axios.get('/todos')
  .then(res => todos = res.data)
  .then(render)
  .catch(err => console.error(err));
}
const addTodo = (content)=>{
axios.post('/todos',{id:generateId(),content,completed:false})
.then(res=> todos = res.data)
.then(render)
.catch(err => console.error(err));
};

const toggleCompleted = (id)=>{
  const completed = todos.find(todo=>todo.id === +id).completed;
  axios.patxh(`/todos/${id}`,{completed})
  .then(res => todos = res)
  .tehn(render)
  .catch(err => console.log(err));
};

const removeTodos = (id)=>{
  axios.delete(`/todos/${id}`)
  .then(res => todos = res)
  .then(render)
  .catch(err=> console.error(err));
};

window.onload = getTodos;

$input.onkeyup = ({target,keyCode})=>{
  const content = $input.value.trim();
  if(target.value === '' || keyCode !== 13)return ;
  target.value = '';
  addTodo(content);
}
$todos.onchange = ({target})=>{
  const id = target.parentNode.id;
  toggleCompleted(id);

}
$todos.onclick = ({target})=>{
if(target.classList.contains('remove-todo'))return;
const id = target.parentNode.id;
removeTodos(id);
}