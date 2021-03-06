const input = document.getElementsByClassName("tasks__input");
const list = document.getElementById("tasks__list");
const applyButton = document.getElementById("tasks__add");
let tasks = list.children;

input[0].addEventListener("keydown", (event) =>{
    if (event.keyCode == 13) {
        event.preventDefault();
        addTask();
    }
})

applyButton.addEventListener("click", (event) =>{
    event.preventDefault();
    addTask();
})

list.addEventListener("click", (event) =>{
    if (event.target.classList.contains("task__remove")){
        event.target.closest(".task").remove();
    }
})

function addTask() {
    if (input[0].value) {
        list.innerHTML += 
            `<div class="task">
                <div class="task__title">
                    ${input[0].value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
        input[0].value = "";
    }
}



