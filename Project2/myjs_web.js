document.addEventListener("DOMContentLoaded", function(){
    const Titles = []
    const Descs = []
    document.querySelector("form").onsubmit = function(){
       let TaskTitle = document.querySelector("#TaskTitle").value
        let TaskDesc = document.querySelector("#TaskDesc").value

        Titles.length = Titles.length + 1;
       Descs.length = Titles.length;
        Titles[Titles.length - 1] = TaskTitle;
        Descs[Descs.length - 1] = TaskDesc;
        for(let i = 0; i < Titles.length; i++){

        }
        return false;
    }
    })


