const addBtn = document.getElementById("addBtn");
const newTaskBox = document.querySelector("#newTask");

function domLoaded() {
    document.addEventListener("DOMContentLoaded", function() {
        addBtn.addEventListener("click", addBtnClick)
        newTaskBox.addEventListener("keyup", keyupEventHandler)
    });
}

domLoaded();

function keyupEventHandler(event) {
    if (event.key == "Enter") {
        addBtnClick(event);
    }
}

function addBtnClick(event) {
    event.preventDefault();
    let newTask = document.querySelector("#newTask");
    if (newTask.value.trim() == "") {
        event.preventDefault();
        newTask.focus();
    }
    else {
        console.log(newTask.value);
        addTask(newTask.value);
        newTask.value = "";
        newTask.focus();
    }

}

function addTask(input) {
    let li = document.createElement("li");
    li.innerHTML= `<span class="task-text">${input}</span><button class="done-btn">&#10006;</button>`;
    let ol = document.querySelector("ol");
    ol.appendChild(li);
}

