// import '../css/index.less';
// import todoData from './todo.json';
// import { getAllTodos } from './data';

import { onLoadEventHandler, newtodoEventHandler } from './event-handlers';
import '../css/index.scss';

console.log('index.js');

window.addEventListener('DOMContentLoaded', () => {
  console.log('ready');

  // renderTodos(getAllTodos());
  onLoadEventHandler();
});

window.addEventListener('load', () => {
  console.log('load');

  const input = document.querySelector('.new-todo');
  input.addEventListener('change', newtodoEventHandler);
});
