const addTasksBtn = document.getElementById("submitButton");
const input = document.getElementById("taskInput");
const taskListElement = document.getElementById("taskDisplay");
const removeTasksBtn = document.getElementById('removeTasks')
let taskList = [];

addTasksBtn.addEventListener("click", addTasks);

function addTasks(event) {
  event.preventDefault();
  const inputValue = input.value.trim();
  const newTaskElement = `<div class="task-element">${inputValue}</div>`;
  taskListElement.insertAdjacentHTML("afterend", newTaskElement);
  taskList.push(newTaskElement);
  saveTasks();
}

function displayTasks() {
  for (const task of taskList) {
    taskListElement.insertAdjacentHTML("afterend", task);
  }
}

function saveTasks() {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function loadTasks() {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
      taskList.push(...JSON.parse(storedTasks));
      displayTasks();
    }
}
  
loadTasks();

removeTasksBtn.addEventListener('click', removeTasks)

function removeTasks(){
    localStorage.clear();
}
