export function renderTodos(todos) {
  const arrRenderTodo = todos.map((todo) => {
    const classStatus = todo.done ? 'done' : '';
    const attrChecked = todo.done ? 'checked' : '';
    return `
    <li data-id="${todo.id}" class="${classStatus}">
      <span class="custom-checkbox">
        <i class="fas fa-check"></i>
        <input class="real-checkbox" type="checkbox" ${attrChecked} />
      </span>
      <label>${todo.title}</label>
      <span class="delete"></span>
    </li>
    `;
  });

  document.querySelector('.todo-list').innerHTML = arrRenderTodo.join('');
}

export function clearNewTodoInput() {
  document.querySelector('.new-todo').value = '';
}

export function getTodoId(el) {
  // const todo = el.closest('li');
  // const id = parseInt(el.parentNode.dataset.id, 10);
  // console.log('id', id);

  return parseInt(el.dataset.id
      || el.parentNode.dataset.id
      || el.parentNode.parentNode.dataset.id, 10);
}

export function showAlert(text) {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', 'alert-success');
  alertEl.setAttribute('role', 'alert');
  alertEl.innerHTML = text;
  document.body.appendChild(alertEl);

  setTimeout(() => {
    alertEl.parentNode.removeChild(alertEl);
  }, 2500);
}
