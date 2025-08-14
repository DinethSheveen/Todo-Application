const task = document.querySelector(".task-input")
const date = document.querySelector(".date-input")
const todoSection = document.querySelector(".todo-list")

let todoList = [
    {
        task : "Make Dinner",
        date : "2025-08-29"
    },
    {
        task : "Learn to Code",
        date : "2025-05-29"
    }
] 

function addTask(){
    if(task.value.trim() === ""){
        return
    }
    else{

        todoList.push({
            task : task.value,
            date : date.value 
        })

        renderTask()

        task.value = "";
        date.value = "";
    }
}
 

function renderTask(){
    todoSection.innerHTML = ""


    todoList.forEach((todoObject,index)=>{

        const {task,date} = todoObject;

        todoSection.innerHTML +=    `
                                    <div>
                                        ${task}
                                    </div>
                                    <div>
                                        ${date}
                                    </div>
                                    <button class="dlt-btn" onclick="deleteTask(${index})">
                                        Delete
                                    </button>
                                    `
    })

    // for(let i=0;i<todoList.length;i++){
    //     todoSection.innerHTML +=    `
    //                                 <div>
    //                                     ${todoList[i].name}
    //                                 </div>
    //                                 <div>
    //                                     ${todoList[i].date}
    //                                 </div>
    //                                 <button class="dlt-btn" onclick="deleteTask(${i})">
    //                                   Delete  
    //                                 </button>
    //                                 `
    // }
}


function deleteTask(index){
    todoList.splice(index,1);
    renderTask()
}

renderTask()