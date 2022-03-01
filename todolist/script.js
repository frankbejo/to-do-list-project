// text input
const todoinput = document.querySelector("#to-do-input");
const todoAdd = document.querySelector(".to-do-add");

// ul container
const todoListContainer = document.querySelector(".to-do-list-items");

let todos;
loadStorage();
function loadStorage(){

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    localStorage.setItem("todos",JSON.stringify(todos));
        let itemContainer = "";

        todos.forEach((item, index) => {
            itemContainer += 
            `
            
            <li class="to-do-list-item">
            <div>
            <input type="checkbox" name="checkbox" id="checkbox" ${item.isChecked ? "Checked" : " "} onclick= checkThis(${item.isChecked},${index})>
            ${item.todos}
            </div> 
            <i class="material-icons" onclick="removeItem(${index})">remove</i></li>
            `
        })
        todoListContainer.innerHTML = itemContainer;
    }



todoAdd.addEventListener('click', addtodo)

function addtodo(){
    if(Boolean(todoinput.value)){
        todos.push(new Object({todos: todoinput.value, isChecked: false}));
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    todoinput.value = "";
    loadStorage();
}

// remove items
const removeitem = document.querySelectorAll("#remove-this-item");

function removeItem(index){
    todos.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(todos));
    loadStorage();
}




// greetings
const greeting = document.querySelector(".greeting");
const randomNum = Math.floor(Math.random()*10);
const randomGreet = ["Sup", "Yo", "Hey", "Ano na", "Hi", "Musta", "Hi there", "Wazzup", "Pogi mo", "Zup"];
const timeHours = new Date().getHours();

if(timeHours <= 11){
    greeting.textContent = `${randomGreet[randomNum]} Frank, Good Morning`;
}

else if(timeHours <= 16){
    greeting.textContent = `${randomGreet[randomNum]} Frank, Good Afternoon`;
}

else if(timeHours <= 23){
    greeting.textContent = `${randomGreet[randomNum]} Frank, Good Evening`;
}

function checkThis(checked, index){
    todos[index].isChecked = !checked;
    localStorage.setItem("todos",JSON.stringify(todos));
    loadStorage();
}






// Testing data using array Object
// let arrayObject = [
//     {
//     todos: "create a website",
//     isCompleted: false
//     },
//     {
//     todos: "Add checkbox",
//     isCompleted: true
//     }
// ]
// function displayItem(){
//     arrayObject.forEach((item, index) => {
//         console.log(`${item.isCompleted}`)
//     })
// }


// arrayObject.push(new Object({todos: "Add filter list", isCompleted: false}))

// localStorage.setItem("items", JSON.stringify(arrayObject))
// let items = JSON.parse(localStorage.getItem("items"))
// console.log(arrayObject)
// console.log(items)
// displayItem();
