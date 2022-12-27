import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}
function handleClick(){
  alert("가위바위보!")
}
const me = 'rock'
const other = 'scissor'
const result = getResult(me, other)
root.render(
  <>
    <h1 id="title">가위바위보</h1>
    <App></App>
    <h2>
      <p>{result}</p>
    </h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>

);

