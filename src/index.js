import './style.css';

const tasks = [
  {
    id: '1',
    description: 'My task 1',
    completed: false,
  },
  {
    id: '2',
    description: 'My task 2',
    completed: true,
  },
  {
    id: '3',
    description: 'My task 3',
    completed: false,
  },
  {
    id: '4',
    description: 'My task 4',
    completed: false,
  },
];

function displayToDoList(tasks) {
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
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const listItemDescription = document.createElement('span');
    listItemDescription.classList.add('description');
    listItemDescription.innerText = task.description;
    listItem.appendChild(listItemDescription);

    const dots = document.createElement('i');
    dots.setAttribute('class', 'fa fa-ellipsis-v span-two move');
    listItem.appendChild(dots);
    ul.append(listItem);
  });
  ul.innerHTML += '<li class=\'todo-clear\'><button href=\'#\' class=\'clear-button\'>Clear all completed</button></li>';
  list.appendChild(ul);
}

displayToDoList(tasks);
