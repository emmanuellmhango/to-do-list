export default class interation {
  static updateState(id) {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    let result = null;
    tasks.forEach((val) => {
      if (val.index === id) {
        if (val.completed === true) {
          val.completed = false;
          result = false;
        } else {
          val.completed = true;
          result = true;
        }
      }
    });
    localStorage.setItem('todolist', JSON.stringify(tasks));
    return result;
  }

  static checkTask() {
    const taskDivCheck = document.querySelectorAll('.task');
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    taskDivCheck.forEach((task) => {
      const taskCheck = document.getElementById(task.id);
      const id = parseInt(task.getAttribute('id'), 10);
      const taskCheckBox = document.getElementById(id.toString().concat('-check'));
      let checkCompleteStatus = null;
      tasks.forEach((val) => {
        if (val.index === id) {
          checkCompleteStatus = val.completed;
        }
      });
      if (checkCompleteStatus === true) {
        taskCheck.style.textDecoration = 'line-through';
        taskCheck.style.fontStyle = 'italic';
        taskCheckBox.checked = true;
      } else {
        taskCheck.style.textDecoration = 'none';
        taskCheck.style.fontStyle = 'normal';
        taskCheckBox.checked = false;
      }
    });
  }

  static clearChecked() {
    const tasks = JSON.parse(localStorage.getItem('todolist') || '[]');
    const newTasks = tasks.filter((val) => val.completed === false);
    let keyId = 1;
    newTasks.forEach((val) => {
      val.index = keyId;
      keyId += 1;
    });
    localStorage.setItem('todolist', JSON.stringify(newTasks));
    return true;
  }
}
