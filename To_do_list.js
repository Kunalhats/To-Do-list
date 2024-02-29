let input=document.querySelector('#taskInput')
let task=document.querySelector('#taskList')

let button=document.querySelector('#addTaskBtn')


button.addEventListener('click',function(event){
    if(input.value!==''){
        let li=document.createElement('li')
        li.innerHTML=input.value
        task.appendChild(li)
        input.value=' '

    }
})
