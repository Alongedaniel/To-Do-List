"use strict";
let addTask = document.getElementById("addTaskBtn");
const textInput = document.querySelector("#taskInput");

const newTask = document.querySelector("#newTask");
const msg = document.querySelector(".msg");

addTask.addEventListener("click", onClick);

function onClick() {
  if (textInput.value == "") {
    msg.innerHTML = "Please enter a task!";
    msg.classList.add("error");
    setTimeout(() => msg.remove(), 3000);
  } else {
    const newDiv = document.createElement("div");
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`${textInput.value}`));
    newDiv.appendChild(p);
    const remove = document.createElement("button");
    remove.appendChild(document.createTextNode("remove"));
    newDiv.appendChild(remove);
    newTask.appendChild(newDiv);
    newDiv.classList.add("newDiv");
    remove.addEventListener("click", () => {
        newDiv.remove();
    });

    textInput.value = "";
  }
}
