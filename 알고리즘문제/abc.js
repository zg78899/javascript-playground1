function solution(n) {
  console.log(typeof n)
  let res = [];
  let arr = res.push(n);


}
console.log(solution(118372));


const express = resuqire('express');
const app = express();
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const string = ReactDOMServer.renderToString(
  React.createElement('div', null, 'Hello world')//태그 이름 ,props,children;
);

console.log(string);

//어떤 용청에 어떤 응답을 합지를 설정

//api서버를 만든다.
app.get("/api/get", (req, res) => {
  res.json(['hell', 'world'])
});

//static파일 있다면 그것을 준다.
app.use('__dirname', "bulid");

app.get('*,', (req, res) => {

  const state = 
  {
    books: { books: [], loading: false, error: null },
    auth: { token: null, loading: false, error: null }
  }
  //store의 state의 모습과 같다.
  
  window.INITAL_STATE = JSON.stringify(state);

  const string = ReactDOMServer.renderToString(React.createElement('div', null, 'Hello world'));
  const html = fs
    .readFileSync(join(__dirname, 'bulid', 'index.html'))
    .toString();

  // res.sendFile(join(__dirname,'build','index.html'));
  res.send(
    html.replace(
      `<div id="root"></div>`, `<div id ="root">${string}</div> 
      <script>window.INITAL_STATE =${JSON.stringify(state)}</script>`,
    )
  );
})

app.listen(9000, () => {
  console.log('server is start...')
})


function solution(v){
  var answer = [[]];

  for(var i =0 ;i<2 ;i ++){
    if(v[])
  }
}
