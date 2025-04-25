

const taskInput = document.getElementById("taskInput")

const addBtn = document.getElementById("addBtn")

const taskList = document.getElementById("taskList")

addBtn.addEventListener("click", ()=>{

    const taskText = taskInput.value
    if (taskText === "") return
    
    const li = document.createElement("li")
    li.innerText = taskText
    
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.style.marginLeft = "10px"
    removeBtn.addEventListener("click", ()=>{
        taskList.removeChild(li)
        // taskList.removeChild(removeBtn)
    })


    taskList.appendChild(li)
    li.appendChild(removeBtn)
    taskInput.value= ""

})
