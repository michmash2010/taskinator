// assign the button element object representation 
// to a variable
// var buttonEl = document.querySelector("#save-task");
// console.log(buttonEl);

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function() {
    // prevents the browser from doing it's default behavior of submitting the form and reloading page
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    // validation - check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("Please fill out the task form.");
        return false;
    }

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);

    // reset the form
    formEl.reset();
};

var createTaskEl = function(taskDataObj) {
    // create a new list item
    var listItemEl = document.createElement("li");
    // style the new task item
    listItemEl.className = "task-item";
 
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
 
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
 
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);