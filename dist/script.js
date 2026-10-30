function domLoaded() {
    document.addEventListener("DOMContentLoaded", function() {
        const addBtn = document.getElementById("addBtn");
        addBtn.addEventListener("click", addBtnClick)
    });
}

domLoaded();

function addBtnClick(event) {
    event.preventDefault();
    const newTask = document.querySelector("#newTask").value;
    console.log(newTask);
    addTask(newTask);
}

function addTask() {
    const newTask = document.querySelector("#newTask").value;
    let li = document.createElement("li");
    li.innerHTML= `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;
    let ol = document.querySelector("ol");
    ol.appendChild(li);
}

