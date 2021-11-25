// import '../css/index.less';
// import todoData from './todo.json';
// import { getAllTodos } from './data';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  onLoadEventHandler,
  newTodoEventHandler,
  deleteTodoEventHandler,
  toggleTodoEventHandler,
  alertDeleteTodoEventHandler,
} from './event-handlers';
import '../css/index.scss';

console.log('index.js');

library.add(faCheck);
dom.watch();

window.addEventListener('DOMContentLoaded', () => {
  console.log('ready');

  // renderTodos(getAllTodos());
  onLoadEventHandler();
});

window.addEventListener('load', () => {
  console.log('load');

  const input = document.querySelector('.new-todo');
  input.addEventListener('change', newTodoEventHandler);
});

document.querySelector('.todolist-wrapper').addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    console.log('delete');

    deleteTodoEventHandler(event.target);
  } else if (event.target.classList.contains('real-checkbox')) {
    console.log('toggle');

    toggleTodoEventHandler(event.target);
  }
});

document.getElementById('alert-delete-button').addEventListener('click', (event) => {
  console.log('alert');

  alertDeleteTodoEventHandler(event.target);
});
