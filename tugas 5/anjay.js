function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    

    if (taskInput.value.trim() !== "") {
        const task = document.createElement('li');
        task.innerText = taskInput.value;

      
        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.onclick = function() {
            task.classList.toggle("completed");
        };

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = function() {
            const newTaskText = prompt("Edit your task:",);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                task.innerText = newTaskText;
                task.appendChild(completeButton);
                task.appendChild(editButton);
                task.appendChild(deleteButton);
                
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.innerText ="Delete";
        deleteButton.onclick = function() {
            task.remove();
        };

        task.appendChild(completeButton);
        task.appendChild(deleteButton);
        task.appendChild(editButton);

        taskList.appendChild(task);
        taskInput.value = ""; 
    }
}




  