import todos from './todo.json';

const data = todos;

export function getAllTodos() {
  return data;
}

export function addTodo(todo) {
  data.push(todo);
}
