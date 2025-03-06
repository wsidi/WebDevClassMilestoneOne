document.addEventListener("DOMContentLoaded", function(){
    const Titles = [];
    const Descs = []

    const priorities = []

    let numOfThings = 0;

    document.querySelector("#create").onsubmit = function(){
        numOfThings++;
        let TaskTitle = document.getElementById("TaskTitle").value;
        let TaskPriority = document.getElementById("priority").value;
        let TaskDescription = document.getElementById("TaskDesc").value;
        Titles[numOfThings] = TaskTitle;
        priorities[numOfThings] = TaskPriority;
        Descs[numOfThings] = TaskDescription;
        const li = document.createElement('li')
        let new_task_html = `
                                        <div class="Task_${numOfThings}">
                                            <span> <h3>${Titles[numOfThings]}</h3> <p id="theP" style="text-align: right">Priority Level: ${priorities[numOfThings]}</p></span>
                                            <p class="Descrip"> ${Descs[numOfThings]} </p>
                                              <span><p> Task Status: </p></span>
                                            <form>
                                            <input type="radio" id="Pending" name="taskStatus" value="Pending" class="status">
                                            <label for="status">Pending</label><br>
                                            <input type="radio" id="Complete" name="taskStatus" value="Complete" class="status">
                                            <label for="Complete">Complete</label><br>
                                            <input type="button" value="Remove" class="remove">
                                          
                                            
                                            </form>
                                        </div>    
                                        <br>
                                    `
        li.innerHTML = new_task_html;
        document.getElementById("ExistT").append(li)
        return false;
    }
    document.addEventListener('click', function(event){
        if(event.target.classList.contains("remove")){
            const taskContainer = event.target.closest('li');
            const taskIndex = taskContainer.querySelector('h3').innerText;

            const taskIndexInArray = Titles.findIndex(title => title === taskIndex);

            if(taskIndexInArray !==-1){
                console.log(`Removing task: ${Titles[taskIndexInArray]} with priority: ${priorities[taskIndexInArray]}`);
                Titles.splice(taskIndexInArray, 1);
                priorities.splice(taskIndexInArray, 1);
                Descs.splice(taskIndexInArray, 1);

                console.log('Updated Titles:', Titles)
                console.log('Updated Priorities:', priorities);
                console.log('Updated Descriptions', Descs)
            }
            taskContainer.remove()
        }

    })

    document.addEventListener('click', function(event){
        if(event.target.classList.contains("status") && event.target.value === "Complete"){
            const taskContainer = event.target.closest("li");
            const taskTitle = taskContainer.querySelector('h3');
            const taskDesc = taskContainer.querySelector('.Descrip');
            taskTitle.style.textDecoration = 'line-through';
            taskDesc.style.textDecoration = 'line-through';
        }

    })

    document.addEventListener('click', function(event){
        if(event.target.classList.contains("status") && event.target.value === "Pending"){
            const taskContainer = event.target.closest("li");
            const taskTitle = taskContainer.querySelector('h3');
            const taskDesc = taskContainer.querySelector('.Descrip');

            taskTitle.style.textDecoration = 'none';
            taskDesc.style.textDecoration = 'none';
        }

    })









    })






