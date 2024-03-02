# To DO List
```javscript
let button = document.querySelector('#addTaskBtn');
let input = document.querySelector('#taskInput');
let task = document.querySelector('#taskList');

// Add task event listener
button.addEventListener('click', function (event) {
    if (input.value!== '') {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        task.appendChild(li);
        input.value = ' ';

// Adding Checkbox in the list
        let checkbox=document.createElement('input')
        checkbox.type='checkbox'
        checkbox.id='check'
        li.prepend(checkbox);

// Adding X for close Button         
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        span.id = "cross";
        li.appendChild(span);

// Add event listener for the newly created span and removing span
        span.addEventListener('click', function (e) {
            if (e.target.id === 'cross') {
                // Assuming 'task' is the parent element of the clicked span
                let taskItem = e.target.parentElement;
                taskItem.remove();
            }
        });
    }
});

```