export function renderTodos(todos) {
  const arrRenderTodo = todos.map((todo) => {
    const classStatus = todo.done ? 'done' : '';
    return `
    <li data-id="${todo.id}" class="${classStatus}">
      <span class="custom-checkbox"></span>
      <label>${todo.title}</label>
    </li>
    `;
  });

  document.querySelector('.todo-list').innerHTML = arrRenderTodo.join('');
}

export function clearNewTodoInput() {
  document.querySelector('.new-todo').value = '';
}
