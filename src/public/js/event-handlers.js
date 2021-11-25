import { renderTodos, clearNewTodoInput } from './view';
import { getAllTodos, addTodo } from './data';

export function onLoadEventHandler() {
  renderTodos(getAllTodos());
}

function trim(value) {
  return value.trim();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.substring(1);
}

export function newtodoEventHandler(event) {
  console.log(event);
  let title = event.target.value;
  title = capitalize(trim(title));

  addTodo({
    id: Date.now(),
    title,
    done: false,
  });

  renderTodos(getAllTodos());
  clearNewTodoInput();
}
