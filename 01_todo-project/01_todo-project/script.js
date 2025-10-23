// task=['one','two'];
// console.log(task);
// task.push('three','four')
// console.log(task);

document.addEventListener("DOMContentLoaded",()=>{//=> is short form of function.
const todoinput=document.getElementById("todo-input");
const todoBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => eachTask(task));
todoBtn.addEventListener('click',function(){
  const taskText=todoinput.value;
  const newTask={
    id:Date.now(),
    text:taskText,
    complete:false,
  }
  if(todoinput.value==="")return;
  tasks.push(newTask);
  eachTask(newTask);
  console.log(tasks);
  save(); 
  todoinput.value="";

})
function eachTask(task){
  const li=document.createElement("li");
  li.innerHTML=`
  <span>${task.text}</span>
  <button>delete</buttion>`;
  li.querySelector("button").addEventListener('click',()=>{
tasks=tasks.filter(t=> t.id !== task.id)
li.remove();
save();
})
  todoList.appendChild(li);
}
function save(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}
});