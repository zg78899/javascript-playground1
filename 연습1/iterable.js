function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}
console.log('start', new Date().toISOString());


delay(1, (result) => {
  console.log(1,, result)
  delay(1, (result) => {
    console.log(2, result)
    delay(1, (result) => {
      console.log(3, result);
    });
  });
});


function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}
console.log('start', new Date().toISOString());

delay(1, (result) => {
  console.log(1, result);
  delay(1, (result) => {
    delay(1, (result) => {
      console.log(3, result);
      
    });
    console.log(2, (result));
  });

});

// 콜벨 헬이 발생한다.이렇게 했다고 해도  순서대로 1,2,3 을 반환한다. 그러기 때문에 우리는 Promise을 사용하여 이러한 콜벡 헬을 벗어나고 then 이러나느 키워드를 사용하여 순서를 명시적으로 표현하여 사용하게 되었다.
const promise=new Promise((resolve,reject)=>{
  const random=Math.floor(Math.random * 10);
  setTimeout(()=>{
    if(random>=5){
      resolve(random);
    }else{reject(new Error('error'));}
  });
});
promise
.then(res=>console.log(res));
.catch(err=>console.error('error'));

const promise=new Promise((resolve,reject)=>{
  const random=Math.floor(Math.random *10);
  setTimeout(()=>{
    if(random>=5)resolve(random);
    else reject(new Error('ERROR'));
  });
});
promise
.then(res=>console.log(res))
.catch(err=>console.log(err));

const promise=new Promise((resolve,reject)=>{
  const random=Math.floor(Math.random*10);
  setTimeout(()=>{
    if(random>=5) resolve(random);
    else reject(new Error('error'));
  });
});

promise
.then(res=>console.log(res))
.catch(err=>console.log(err));

const p=new Promise((resolve,reject)=>{
  resolve(1)
});
.then(num=>++num);
.then(num1=>console.log(num1))
.catch(err=>console.log(err));

let todos=[];
let navState = 'all';

const $todos=document.querySelector('.todos');
const $input=document.querySelector('.input');
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $checkbox = document.querySelector('.complete-all > .checkbox');
const $activeTodo = document.querySelector('.active-todos');
const $completedTodo = document.querySelector('.completed-todos');
const $clearCompletedAll = document.querySelector('.clear-completed > .btn');


const render=()=>{
const _todos=todos.filter(({completed})=>(navSate ==='all'? true:(navState ==='active'? !comleted : completed)));
  let html='';
  _todos.forEach(({id,content,completed})=>{
    html+=``
  });
  $todos.innerHTML=html;
  $activeTodo.textContent=todos.filter(todo=>!todo.completed).length;
  $completedTodo.textContent=todos.filter(todo=>todo.completed).length;

};
const ajax=(()=>{
const req=(method,url,payload,)=>{
  return new Promise((resolve,reject)=>{

    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.setRequestHeader('content=type','application/json');
    xhr.sen(JSON.stringify(payload));

    xhr.onload=()=>{
      if(xhr.status === 2000){
        resolve(JSON.parse(xhr.response));
    }
  };
    xhr.onerror=()=>{
      reject(new Error(xhr.response,xhr.status));
    };
    };
  });
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
     return req('DELTE',url);
   }
 }
})();

ajax.get('/todos')
.then(todos=>todos.filter(todo=>todo.id ===1));
.then(console.log)

cosnt generateId=()=>{
return todos.length? Math.max(...todos.map(todo=>todo.id))+1:1;

}
const getTodos=()=>{
  ajax.get('/todos')
  .then(_todos=>todos=_todos)
  .then(render)
  .catch(err=>console.err(err));
}
const addTodo=(content)=>{
  ajax.post('/todos',{id:generateId(),content,completed:false})
  .then(_todos=>todos=_todos);
  .then(render)
  .catch(err=console.err(err));
}
const toggelCompleted=(id)=>{
  ajax.patch(`/todos/${id}`,{completed})
  .then(_todos=>todos=_todos)
  .then(render)
  .catch(err=>console.error(err));
}
const removeTodo=(id)=>{
ajax.delete(`/todos/${id}`)
.then(_todos=>todos=_todos)
.then(render)
.catch(err=>console.err(err));
}
const toggleCompletedAll=(completed)=>{
  ajax.patch('/todos',{completed})
  .then(_todos=>todos=_todos)
  .then(render)
  .catch(err=>console.error(err));
}
const clearCompletedAll=()=>{
  ajax.delete('/todos/completed')
  .then(_todos=>todos=_todos)
  .then(render)
  .catch(err=>console.error(err));
}
const changeNav=(id)=>{
  [...nav.children].forEach($navItem=>{
    $navItem.classList.toggle('active', $navItem.id === id);
  });
  navState= id;
}

window.onlaod=()=>{
  getTodos();
}
$input.onkeyup=({target,keyCode})=>{
  const content=$input.value.trim();
 if(!content || keyCode !==13)return;
 target.value='';
 addTodo(content);
//  ajax.post('/todos',{id:generateId(),content,completed:false});
}
$todos.onchange=({target})=>{
toggleCompleted(target.parentNode.id);
}
$todos.onclick=({target})=>{
  if(!target.classList.contains('remove-todo'))return;
  removeTodos(target.parentNode.id);
}

$checkbox.onchange=({target})=>{
  toggleCompletedAll(target.checked);
}
$clearCompletedAll.onclick=()=>{
  $clearCompletedAll();
}
$nav.onclick=({target})=>{
  if(target.classList.contains('nav'))return;
 changeNav(target.id);
}

axios.ajax.get('/todos')
.then(res=>rtodos=res.data)
.then(render)
.catch(err=>console.error(err))

axios.ajax.post('/todos',{id:generateId(),content,completed:false})
.then(res=>todos=res.data)
.then(render)
.catch(err=>conssolr.error(err)))

axios.ajax.patch(`/todos/${id}`,{complseted:!completed})
.then(res=>todos=res.data)
.then(render)
.catch(err=>console.error(err));

axios.ajax.delete(`/todos/${id}`)
.then(res=>todos=res.data)
.then(render)
.catch(err=>console.error(err))

const promise=new Promise((resolve,reject)=>{
  const random=Math.floor(Math.random*10);
  setTimeout(()=>{
    if(random>=5)resolve(random);
    else reject(new Error('error'));
  });
});
promise
.then(res=>console.log(res))
.catch(err=console.log(err));


const p=new Promise((resolve,reject)=>{
  resolve(1);
})
.then(num=>++num)
.then(console.log);
