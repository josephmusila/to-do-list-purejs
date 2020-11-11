import { Nodes } from './Nodes.js';

import { EmptyTask } from './EmptyTask.js'



let AddTask=()=>{
    let task = document.getElementById("task").value;
   if(task===""){
    EmptyTask();
   }else{
       Nodes();
   }
}
export { AddTask }