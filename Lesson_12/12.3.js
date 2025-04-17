const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn">Видалити</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.closest("li");
        if (li) li.remove();
    }
})