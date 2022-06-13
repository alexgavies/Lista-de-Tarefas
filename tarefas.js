//func de adicionar tarefas
    function addTask() {
    //titulo da tarefa
    const taskTitle=document.querySelector('#task-title').value;

    if (taskTitle) {
        //clona templete
        const templete=document.querySelector('.templete');
        
        const newTask=templete.cloneNode(true);

        //adicionar titulo
       newTask.querySelector('.task-title').textContent = taskTitle;
       

        //remover as classe denecessarias
        newTask.classList.remove('templete');
        newTask.classList.remove('hide');

        //adiciona tarefa na lista
        const list=document.querySelector('#task-list');

        list.appendChild(newTask);

        // evento de remover
        const removeBtn=newTask.querySelector('.remove-btn').addEventListener('click', function () {
            removeTask(this);
        })

        //evento completar tarefa 
        const doneBtn=newTask.querySelector('.done-btn').addEventListener('click', function () {
            completeTask(this);
        });

        //lipar texto
        document.querySelector('#task-title').value='';
    }
}

//func completa task
function completeTask(task) {
    const taskComplete=task.parentNode;

    taskComplete.classList.toggle('done');
}


//func de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//evento de adicionar tarefas
const addBtn=document.querySelector('#add-btn');

addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    addTask();
})