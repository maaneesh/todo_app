const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');


form.addEventListener('submit', (e) => {

    e.preventDefault();

    addTodo();
   


});


function addTodo(todo) {
    let todoText = input.value;
    //checking if a todo  already exists
    if(todo){
        //set the value of input to the value of todo.text
        todoText = todo.text;
    }
    //if the text exists 
    if(todoText){
        //create a new list item
        const todoEL = document.createElement('li');
        //if there's a todo AND its completed, we're adding astrike through class
        if(todo && todo.completed){
            todo.classList.add('completed');
        }

        //make the text of li same ast input value
        todoEL.innerText = todoText;
        
        //append the todo li item to the todo unordered list
        todoUl.appendChild(todoEL);

        //clear out after enter
        input.value = " ";

        todoEL.addEventListener('click', (e)=>{
            todoEL.classList.toggle('completed');

        });

        todoEL.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoEL.remove();

        });

    }

    
}

