let tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
let tasksList = document.querySelector('.tasks__list');

tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();
  let taskText = tasksInput.value.trim();
  if (taskText != '') {
    let task = document.createElement('div');
    tasksList.appendChild(task);
    task.innerHTML = `<div class="task">
                          <div class="task__title">
                            ${taskText}
                          </div>
                          <a href="#" class="task__remove">&times;</a>
                      </div>`;
   
    const taskRemove = task.querySelector('.task__remove');
    taskRemove.addEventListener('click', (ev) => {
      ev.preventDefault();
      task.remove();
    });
  }
  tasksInput.value = '';
});