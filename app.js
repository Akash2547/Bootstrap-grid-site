document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById("taskInput");
    const add = document.getElementById("add");
    const taskList = document.getElementById("taskList");

    add.addEventListener("click", function () {
        addTask();  });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {addTask();}
    });

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task!");
            return;
        }

        const item = document.createElement("li");
        item.innerHTML = `
            <input type="checkbox" class="cb">
            <span class="task">${taskText}</span>
            <span class="due-date">Due Today</span>
            <button class="rem"><i class="fa-sharp fa-solid fa-x fa-beat-fade" style="color: #f51414;"></i></button>
        `;
        addRemoveTaskListener(item);
        taskList.appendChild(item);
        taskInput.value = "";
        addDateClickListener(item);
    }

    function addRemoveTaskListener(item) {
        const r = item.querySelector(".rem");
        r.addEventListener("click", function () {
            item.remove();
        });
    }

    function addDateClickListener(item) {
        const due = item.querySelector(".due-date");
        due.addEventListener("click", function(){
            const date = prompt("Set Due Date : ");            
            if(date !== null){
                due.textContent = date;
            }
        });
    }
});
