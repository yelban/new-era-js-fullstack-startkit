import { Modal } from 'bootstrap/dist/js/bootstrap.esm.min';

import {
  renderTodos, clearNewTodoInput, getTodoId, showAlert,
} from './view';
import {
  getAllTodos, addTodo, deleteTodo, updateTodo,
} from './data';

export function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function trim(value) {
  return value.trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

export function newTodoEventHandler(event) {
  // console.log(event);
  let title = event.target.value;
  title = capitalize(trim(title));

  addTodo({
    id: Date.now(),
    title,
    done: false,
  });

  renderTodos(getAllTodos());
  clearNewTodoInput();
  showAlert('Todo has been created successfully!');
}

export function deleteTodoEventHandler(el) {
  const id = getTodoId(el);
  document.getElementById('alert-delete-button').dataset.id = id;
  const alertDailog = new Modal(document.getElementById('alert-delete-todo'), { focus: true });
  alertDailog.show();
}

export function alertDeleteTodoEventHandler(el) {
  const id = getTodoId(el);
  deleteTodo(id);
  renderTodos(getAllTodos());
  const alertDailog = Modal.getInstance(document.getElementById('alert-delete-todo'));
  alertDailog.hide();
}

export function toggleTodoEventHandler(el) {
  const id = getTodoId(el);
  const done = el.checked;
  updateTodo(id, done);
  renderTodos(getAllTodos());
}
