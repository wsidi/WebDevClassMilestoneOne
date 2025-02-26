document.addEventListener("DOMContentLoaded", function(){
    const Titles = []
    const Descs = []
    document.querySelector("#create").onsubmit = function(){
       let TaskTitle = document.querySelector("#TaskTitle").value
        let TaskDesc = document.querySelector("#TaskDesc").value
        Titles.length = Titles.length + 1;
       Descs.length = Titles.length;
        Titles[Titles.length - 1] = TaskTitle;
        Descs[Descs.length - 1] = TaskDesc;
        const li = document.createElement("li");
        for(let i = 0; i < Titles.length; i++){
                    let new_task_html = `
                                                   <span><h3> ${Titles[i]} </h3><br></span>
                                                    <span>  ${Descs[i]} </span>
                                                  `;
            li.innerHTML = new_task_html;

        }
        document.querySelector("#ExistT").append(li);
        document.querySelector("#TaskTitle").value = "";
        document.querySelector("#TaskDesc").value = "";
        return false;
    }
    })


