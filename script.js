
var button = document.getElementById("submitButton")
var taskText = document.getElementById("task");

button.addEventListener('click', addTask())

function addTask(){
    
    alert(taskText.value)    
}