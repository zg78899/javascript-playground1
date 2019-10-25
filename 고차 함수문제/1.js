const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach((todo) => {

    html += `<li id=${todo.id}>
    <label><input type= "checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
  </li>`;
  });
  return html;//foreach는 undefined을 반환한다. 따라서 밖에서 리턴해준다.
}

console.log(render());

function render(){
  let html='';
  for(let i=0;i<todos.length;i++){
    const todo= todos[i];
    html+= `<li id=${todo.id}>
  <label><input type=${todo.completed? 'checked':''}>HTML</label>
</li>`;
  }
}

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

