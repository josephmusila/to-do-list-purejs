import { dy} from './date.js';
console.log(dy)

let add=document.getElementById("add");
add.addEventListener('click',()=>{
    let task=document.getElementById("task").value;
        if(task===""){
            console.log("empty task");
            
        }else{
            //creating nodes
            document.getElementById("task").value="";
            let parent=document.getElementById("task-list");
            let div=document.createElement("div");
            let para=document.createElement("p1");
            let para2=document.createElement("p2");
            let para3=document.createElement("p3");
         
            //append tasks
            para3.innerHTML="Added On"  +  dy;
            para2.innerHTML='X';
            para2.classList.add("x-button");
            div.classList.add("newtask")
            para.innerHTML=task;
            div.prepend(para3);
            div.prepend(para);
            div.append(para2);
            parent.prepend(div);

          
          
            
            /* task.reset(); */
            /* console.log(task); */

            //delete tasks
            para2.addEventListener("click",()=>{
                div.remove();
            });
              //show number of tasks
              let pare=document.getElementById("task-list");
              let count=document.getElementById("count");
              let countt=pare.childElementCount;
              count.innerHTML=countt;
        }
});
