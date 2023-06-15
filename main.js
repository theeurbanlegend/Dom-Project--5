const newTask=document.getElementById("add-task")
const taskContain=document.getElementById("task-container")
const writeTask=document.getElementById("input-task")

newTask.addEventListener('click', function(){
    let task=document.createElement('div')
    task.classList.add("task")

    let li=document.createElement("li")
    li.innerText=`${writeTask.value}`
    task.appendChild(li)

    let checkButton=document.createElement("button")
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton=document.createElement("button")
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)

    if(writeTask.value===""){
        alert("Please write a task")
    }else{
        taskContain.appendChild(task)
    }
    writeTask.value=''

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration="line-through"
    })
    deleteButton.addEventListener('click', function(e){
        let target=e.target
        target.parentElement.parentElement.remove()
    })
})