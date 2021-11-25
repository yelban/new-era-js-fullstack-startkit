import todos from './todo.json';

let data = todos;

export function getAllTodos() {
  return data;
}

export function addTodo(todo) {
  data.push(todo);
}

export function deleteTodo(id) {
  data = data.filter((todo) => todo.id !== id);
}

export function updateTodo(id, done) {
  const index = data.findIndex((value) => value.id === id);
  data[index].done = done;
}
