//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

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

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//The functions is built enabling the three filter options to work
function filterTodo(e) {
    //Brings back all the children of the HTML element ul which is the list of the tasks 
    const todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        //target.value will bring back the value asigned to the selection in the dropdown filter
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}