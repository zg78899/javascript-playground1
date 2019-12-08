const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
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

ajax.get('/todos')
  .then(todos => Math.max(0,...todos.map(todo => todo.id)))
  .then(id => ajax.delete(`/todos/${id}`))//ajax.delete(`/todos/${id}은 표현식인 문이다,얘 자체가 프로미스를 리턴한다.또다른 프로미스 래핑하는것이 아니라 그냥 프로미스 값을 리턴한다.
  .then(console.log);

(async ()=> {
  let todos = await ajax.get('/todos');
  const id= Math.max(0,...todos.map(todo => todo.id));
  todos= await ajax.delete(`/todos/${id}`);
  console.log(todos);
})();

//프로미스에서 사용한 값이이 모두 async await에 들어가있어야 하고 순서가 보장이된다.

// const todos= await ajax.get('/todos')
  // .then(todos => Math.max(0,...todos.map(todo => todo.id)))
  // .then(id => ajax.delete(`/todos/${id}`))//ajax.delete(`/todos/${id}은 표현식인 문이다,얘 자체가 프로미스를 리턴한다.또다른 프로미스 래핑하는것이 아니라 그냥 프로미스 값을 리턴한다.
  // .then(console.log);
  // .catch(err => console.log(err));

  ajax.get('/todos')
  .then(todos=>Math.max(0,...todos.map(todo=>todo.id)))
  .then(id=>ajax.delete(`/todos/${id}`))
  .then(console.log);
(async()=>{
  let todos=await ajax.get('/todos');
  const id= Math.max(0,...todos.map(todo=>todo.id));
  todos= await ajax.delete(`/todos/${id}`);
  console.log(todos);

})


function isHarshad(n){
  let arr=n.toString();
  let sum=0;

  for(let i=0<i<arr.length;i++){
  sum+=parseInt(arr[i]);

  if(n%sum)===0}{
    return true;
  }else return false;
  
}