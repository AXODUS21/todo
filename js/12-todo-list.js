const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2022-22-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];; 



renderTodoList();

function renderTodoList(){

    let todoListHTML = '';

todoList.forEach(function(todoObject, index){
 const name = todoObject.name;
 const dueDate = todoObject.dueDate;

 const html = `
    <div class="todo-row">
    <div>${name}</div> <div>${dueDate}</div>
    <button class="deleteButton" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
    ">Delete</button>
    </div>`;

 todoListHTML += html;

});

document.querySelector(".js-todo")
.innerHTML = todoListHTML;

}

    function addTodo() {
    let inputElement = document.querySelector('.js-name-input');
        let name = inputElement.value;

        const dateInputElement = document.querySelector('.js-due-date-input');
        const dueDate = dateInputElement.value;

        todoList.push({
            //name: name,
          //dueDate: dueDate,
          //the following is a shortcut when the property and the value name is the same
            name,
            dueDate
        });

        
        inputElement.value = '';
        dateInputElement.value = '';
        localStorage.setItem("todoList", JSON.stringify(todoList));
        renderTodoList();
    }


