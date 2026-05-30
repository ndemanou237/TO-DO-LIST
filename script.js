const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");

themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML=`
            <i class="fa-solid fa-sun"></i>
                Light Mode
            `;
    }
    else{
        themeBtn.innerHTML =`
             <i class="fa-solid fa-moon"></i>
                Dark Mode
            `;
    }
});

let french = false;
langBtn.addEventListener("click", ()=>{
    french = !french;
    if(french){
        title.textContent = "Liste des tâches CRUD";
        taskInput.placeholder = "Entrez une nouvelle tâche...";
        addTaskBtn.textContent = "Ajouter";
        langBtn.innerHTML = "EN";
    }
    else{
        title.textContent = "CRUD To Do List";
        taskInput.placeholder = "Enter a new task...";
        addTaskBtn.textContent = "Add Task";
        langBtn.innerHTML = "FR";

    }
});

addTaskBtn.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert(
            french ? "veuillez entrez une tâche" : "Please enter a task"
        );
        return;
    }
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <h3>${taskText}</h3>
        <div class="task-buttons">
            <button class="complete-btn">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="edit-btn">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;
    taskList.appendChild(taskDiv);
    taskInput.value = "";

    const completeBtn = taskDiv.querySelector(".complete-btn");
    completeBtn.addEventListener("click", ()=>{
        taskDiv.classList.toggle("completed");
    });

    const deleteBtn = taskDiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", ()=>{
        taskDiv.remove();
    });

    const editBtn = taskDiv.querySelector(".edit-btn");
    editBtn.addEventListener("click", ()=>{
        const taskTitle = taskDiv.querySelector("h3");
        const newTask = prompt(french ? "Modifier votre tâche" : "Edit your task", taskTitle.textContent);
        if(newTask !== null && newTask.trim() !== ""){
        taskTitle.textContent = newTask
        }
    });
    
})
