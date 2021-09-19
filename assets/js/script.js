// assign the button element object representation 
// to a variable
// var buttonEl = document.querySelector("#save-task");
// console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function() {
     // create a new task item
    var listItemEl = document.createElement("li");
    // style the new task item
    listItemEl.className = "task-item";
    // add the text
    listItemEl.textContent = "This is a new task.";
    // append this element to the task list
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);