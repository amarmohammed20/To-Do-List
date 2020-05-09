// Moving forward I need to use Jquery to format the prompt box

//A prompt on loading the page to get the username for the H1 Title
window.onload = function () {
    const usersname = prompt("What is your name? Even a nick name will do");

    this.document.getElementById('username').innerHTML = `<h1> ${usersname} To Do List </h1>`;
};

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listners
todoButton.addEventListener('click', addToDo);

//Functions

function addToDo(event) {
    //Prevents form from submitting
    event.preventDefault(); 
    //To Do Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create the new li which is the new task
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Completed button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append all the above to the list
    todoList.appendChild(todoDiv);
    //Clear to do input value
    todoInput.value = '';
}