export default class Todo {
  constructor(description) {
    this.id = 0;
    this.description = description;
    this.completed = false;
  }

  addTask() {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    const task = {
      id: tasks.length > 0 ? tasks.length + 1 : 1,
      description: this.description,
      completed: this.completed,
    };
    tasks.push(task);
    localStorage.setItem('todolist', JSON.stringify(tasks));
    return true;
  }

  static addEditedTask(id, task) {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    for (let i = 0; i < tasks.length; i + 1) {
      if (tasks[i].id === id) {
        tasks[i].description = task;
        break;
      }
    }
    localStorage.setItem('todolist', JSON.stringify(tasks));
    return true;
  }

  static displayToDoList() {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    const list = document.querySelector('.todo-list');
    const ul = document.createElement('ul');
    ul.classList.add('to-do');
    const listInput = document.createElement('li');
    const inpu = document.createElement('input');
    inpu.classList.add('todo-input');
    inpu.setAttribute('placeholder', 'Add to your list...');
    listInput.appendChild(inpu);
    ul.appendChild(listInput);
    tasks.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.classList.add('task');
      listItem.id = task.id.toString().concat('-task');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      listItem.appendChild(checkbox);
      const listItemDescription = document.createElement('span');
      listItemDescription.classList.add('description');
      listItemDescription.innerText = task.description;
      listItem.appendChild(listItemDescription);
      const dots = document.createElement('i');
      dots.classList.add('fa', 'fa-ellipsis-v', 'span-two', 'move', 'recycle-bin');
      dots.id = task.id;
      listItem.appendChild(dots);
      ul.append(listItem);
    });
    ul.innerHTML += '<li class=\'todo-clear\'><button href=\'#\' class=\'clear-button\'>Clear all completed</button></li>';
    list.appendChild(ul);
  }

  static removeTask(id) {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    tasks.forEach((val, index) => {
      if (val.id == id) {
        tasks.splice(index, 1);
      }
    });
    let keyId = 1;
    tasks.forEach((val) => {
      val.id = keyId;
      keyId += 1;
    });
    localStorage.setItem('todolist', JSON.stringify(tasks));
    return true;
  }
}
