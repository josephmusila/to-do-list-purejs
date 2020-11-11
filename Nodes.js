import { dateCreated } from "./date.js";

let Nodes = () => {
	let task = document.getElementById("task").value;
	let parent = document.getElementById("task-list");
	let div = document.createElement("div");
	let para = document.createElement("p1");
	let para2 = document.createElement("p2");
	let para3 = document.createElement("p3");

    //append tasks
	para3.innerHTML = "Added On" +  dateCreated;
	para2.innerHTML = "X";
	para2.classList.add("x-button");
	div.classList.add("newtask");
	para.innerHTML = task;
	div.prepend(para3);
	div.prepend(para);
	div.append(para2);
	parent.prepend(div);

	//creating nodes
	document.getElementById("task").value = "";
	/* task.reset(); */
	/* console.log(task); */
	//delete tasks
	para2.addEventListener("click", () => {
		div.remove();
    });
    
	//show number of tasks
	let pare = document.getElementById("task-list");
	let count = document.getElementById("count");
	let countt = pare.childElementCount;
	count.innerHTML = countt;
};
export { Nodes };
