import './style.css';
import Todo from './crud.js';

Todo.displayToDoList();

const addTodo = document.querySelector('.todo-input');
addTodo.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter') {
    const task = addTodo.value;
    const todo = new Todo(task);
    if (todo.addTask() === true) {
      window.history.go(0);
    }
  }
});

const recycle = document.querySelectorAll('.recycle-bin');
recycle.forEach((element) => {
  element.addEventListener('click', () => {
    const id = parseInt(element.getAttribute('id'), 10);
    const elem = document.getElementById(id.toString());
    elem.classList.remove('fa-ellipsis-v');
    elem.classList.remove('move');
    elem.classList.add('mode-del');
    elem.classList.add('fa-trash-o');
    elem.classList.add('delete-task');
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    let descr = null;
    for (let i = 0; i < tasks.length; i + 1) {
      if (tasks[i].id === id) {
        descr = tasks[i].description;
      }
    }
    const ul = document.querySelector('.to-do');
    const childToBeReplaced = ul.children[id];
    const listInput = document.createElement('li');
    listInput.id = id.toString().concat('-task');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    listInput.appendChild(checkbox);
    const inpu = document.createElement('input');
    inpu.classList.add('style-left', 'todo-input');
    inpu.id = 'edit-todo-input';
    inpu.setAttribute('value', descr);
    listInput.appendChild(inpu);
    const dots = document.createElement('i');
    dots.classList.add('fa', 'fa-trash-o', 'span-two', 'move', 'recycle-bin', 'delete-task', 'mode-del');
    listInput.appendChild(dots);
    ul.appendChild(listInput);
    ul.replaceChild(listInput, childToBeReplaced);
    const addEditedTodo = document.getElementById('edit-todo-input');
    addEditedTodo.addEventListener('keypress', (ev) => {
      if (ev.key === 'Enter') {
        const task = addEditedTodo.value;
        if (Todo.addEditedTask(id, task) === true) {
          window.history.go(0);
        }
      }
    });
    const elementDiv = id.toString().concat('-task');
    const del = document.querySelector('.delete-task');
    del.addEventListener('click', () => {
      if (Todo.removeTask(id) === true) {
        document.getElementById(elementDiv).remove();
      }
    });
  });
});
