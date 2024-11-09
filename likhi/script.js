document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML ='${taskText} <button class="remove-task">Remove</button>';
        
        const removeButton = li.querySelector('.remove-task');
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    }
});

document.getElementById('new-task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});