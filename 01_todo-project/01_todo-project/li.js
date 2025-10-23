const todoinput=document.getElementById("todo-input");
const todoBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

todoBtn.addEventListener('click',function(){
  const li=document.createElement("li");
  li.innerHTML=`<span>rohan</span><button>delete</button>`;
  todoList.appendChild(li);
});